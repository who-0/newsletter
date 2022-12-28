const routerVerify = (req, res, next) => {
  const url = req.url;
  const user = url.split("?")[1];
  console.log(`/success?${user}`);
  if (
    url !== "/" ||
    url !== `/success` ||
    url !== `/success?${user}` ||
    url !== "/admin" ||
    url !== "/admin/login" ||
    url !== "/admin/signup"
  ) {
    return res.status(404).json({
      error: "Your request is undefined in our system!",
    });
  }
  next();
};
module.exports = routerVerify;
