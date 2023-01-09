# Newsletter

## Tech Stack

**Client:** HTML, CSS, JS

**Server:** Node, Express, MongoDB

<hr />
## Run Locally

Clone the project

```bash
  git clone https://github.com/who-0/newsletter.git
```

Go to the project directory

```bash
  cd newsletter && cd server
```

Install dependencies

```bash
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`

`MONGO_URL="mongodb+srv://nasa-api:kmd123@nasacluster.uvu3kll.mongodb.net/newsletter?retryWrites=true&w=majority"`

`A_TOKEN = 'newsLetter'`

`R_TOKEN = 'newsLetter_R'`

`ADMIN = 521`

`MEMBER = 632`

Start the server

```bash
  npm start
```

<hr />
<h2>File Structure</h2>
<h3>Front_End</h3>
<pre>
  -client
    |__admin_dashboard.html
    |__admin_profile.html
    |__admin_login.html
    |__admin_signup.html
    |__index.html
    |__error.html
    |__success.html
    |
    |__css
    |   |__admin_dashboard.css
    |   |__admin_profadmin_profile.js
    |   |__admin_login.js
    |   |__admin_signup.js
    |   |__scripts.js
    |   |__error.js
    |   |__success.jsile.css
    |   |__admin_signup.css
    |   |__admin_login.css
    |   |__styles.css
    |   |__error.css
    |   |__success.css
    |
    |__js
    |   |__admin_dashborad.js
    |   |__admin_profile.js
    |   |__admin_login.js
    |   |__admin_signup.js
    |   |__scripts.js
    |   |__error.js
    |   |__success.js
    |
    |__img
        |__admin-background.jpg
        |__icon.svg
        |__login.background.png
        |__signup.background.png
        |__user-profile.svg
</pre>

<h3>Back_End</h3>
<pre>
  -server
    |__server.js
    |__app.js
    |__package.json
    |__.env
    |
    |__services
    |   |__mongodb.js
    |
    |__routes
    |   |__action.router.js
    |   |__admin.router.js
    |   |__home.router.js
    |   |__api.js
    |
    |__controllers
    |   |__action.controller.js
    |   |__admin.controller.js
    |   |__home.controller.js
    |   |__profile.controller.js
    |
    |__models
    |   |__admin.model.js
    |   |__admin.mongo.js
    |   |__users.model.js
    |   |__users.mongo.js
    |
    |__middlewares
        |__verify.middleware.js
<pre>
<hr />
## Newsletter

![newsletter app](https://user-images.githubusercontent.com/56252622/209477223-7f7d5526-ec6d-4dcc-8b0f-7f8f5210bc3e.png)

## Newsletter Login Page

![newsletter app login](https://user-images.githubusercontent.com/56252622/211283677-c880df25-75fb-4ed9-a7a9-b5b856f4f599.png)

## Newsletter Signup Page

![newsletter app signup](https://user-images.githubusercontent.com/56252622/211283784-c4bd7bf2-d930-4508-b246-53df71b1804d.png)

## Newsletter Admin Page

![newsletter app profile](https://user-images.githubusercontent.com/56252622/211284095-0f7172ef-a353-4664-a653-4176602e1780.png)

## Newsletter Profile Page

![newsletter app profile](https://user-images.githubusercontent.com/56252622/211283856-9c29fe51-9765-46d9-9b55-0e191a672806.png)
