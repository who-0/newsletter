const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { addMember, findMember } = require("../models/admin.model");
const { findUsers, deleteUser } = require("../models/users.model");
const { A_TOKEN, R_TOKEN, ADMIN, MEMBER } = process.env;

const httpGetAdmin = async (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "admin_dashboard.html")
  );
};

const httpGetAdminSignup = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "admin_signup.html")
  );
};

const httpGetAdminLogin = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "admin_login.html")
  );
};

const httpPostAdminSignup = async (req, res) => {
  const { uname, pwd, email, code, role } = req.body;
  console.log("testing");
  console.log(req.body);
  if (!uname || !pwd || !email || !code || !role) {
    console.log("check input");
    return res.status(400).json({
      error: "Missing some input. Please All Fill!",
    });
  } else if (code === ADMIN || code === MEMBER) {
    try {
      const oldUser = await findMember(email);
      console.log(oldUser);
      if (oldUser) {
        return res.status(406).json(oldUser);
      } else {
        console.log("start signup");
        const hpwd = await bcrypt.hash(pwd, 8);
        const userToken = jwt.sign({ email, role }, A_TOKEN, {
          expiresIn: "1m",
        });
        const newToken = jwt.sign({ email, role }, R_TOKEN);
        const newUser = {
          uname,
          email,
          code,
          role,
          hpwd,
          newToken,
        };
        const newMember = await addMember(newUser);
        res.cookie("userToken", userToken, { httpOnly: true });
        res.cookie("newToken", newToken, { httpOnly: true });
        return res.status(200).json(newMember);
      }
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: err.message,
      });
    }
  } else {
    return res.status(400).json({
      error: "Your verfiy code is wrong.",
    });
  }
};

const httpPostAdminLogin = async (req, res) => {
  const { email, pwd } = req.body;
  const eUser = await findMember(email);
  if (!eUser) {
    return res.status(404).json({
      error: "Your account is missing in our server",
    });
  } else {
    try {
      const solvepwd = await bcrypt.compare(pwd, eUser.password);
      if (!solvepwd) {
        return res.status(401).json({
          err: "Your password is incorrect",
        });
      } else {
        const role = eUser.role;
        const userToken = jwt.sign({ email, role }, A_TOKEN, {
          expiresIn: "1m",
        });
        const newToken = jwt.sign({ email, role }, R_TOKEN);
        res.cookie("userToken", userToken, { httpOnly: true });
        res.cookie("newToken", newToken, { httpOnly: true });
        return res.status(200).json({
          success: true,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(503).json({
        err: error.message,
      });
    }
  }
};

const httpAllSignup = async (req, res) => {
  try {
    const allSignup = await findUsers({});
    const { role } = req.data;
    if (role === "admin") {
      return res.status(200).json(allSignup);
    } else {
      const role = { role: "member" };
      allSignup.push(role);
      return res.status(200).json(allSignup);
    }
  } catch (err) {
    console.log(err);
    return res.status(503).json({
      error: err.message,
    });
  }
};

const httpDelete = async (req, res) => {
  try {
    const { role } = req.data;
    if (role === "member") {
      return res.status(403).json({
        error: "Your are not authorize.",
      });
    } else {
      const id = req.params.id;
      await deleteUser(id);
      return res.redirect("/admin");
    }
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      err: error.message,
    });
  }
};

module.exports = {
  httpGetAdmin,
  httpGetAdminSignup,
  httpGetAdminLogin,
  httpPostAdminSignup,
  httpPostAdminLogin,
  httpAllSignup,
  httpDelete,
};
