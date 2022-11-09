# Lowdefy Blog

This is a blog web app example created using the [Lowdefy framework](https://github.com/lowdefy/lowdefy).

This example includes authentication using Auth0 as an OpenID Connect provider, and a MongoDB database connection for storing blog post data. A "single user" Auth0 rule is implemented to only allow a single admin user to signup, login and manage the blog. This rule can be changed to allow multiple users according to any condition or removed to allow users with no restrictions.

The home page with all the blog posts can be accessed by all users with an option for users to like posts anonymously. The analytics, new blog post and edit blog post pages can only be accessed by the logged in admin user.

## MongoDB database setup

1. Create a free MongoDB database cluster hosted by [MongoDB Atlas](https://www.mongodb.com/atlas/database).

2. In the Database access section, create a database user with read and write access to any database.

3. In the main cluster view, click "connect", then "Connect your application". This will give a MongoDB URI connection string. Use the credentials you just created in the connection string.

## Auth0 OpenID Connect provider setup

4. Sign up for an Auth0 tenant at [Auth0](https://auth0.com).

5. Create a new application. An Auth0 application is an OpenID Connect client. Choose a "Regular Web Application".

6. Configure the application in the settings tab with the following:

Allowed Callback URLs:
```
http://localhost:3000/auth/openid-callback, https://your-custom-domain.example.com/auth/openid-callback
```
Allowed Logout URLs:
```
http://localhost:3000/home, https://your-custom-domain.example.com/home
```

7. You will need the "Domain", "Client ID", and "Client Secret" from the basic information section of the settings tab.

8. To use the single user rule or any custom rule go to Auth Pipeline then rules and create a rule and enable it once created.

## Lowdefy Blog app setup

9. Clone this repository

10. Create a JSON web token secret

This secret should be a long randomly generated string. Your app will use this to sign the tokens used to authorize users. You can run the following command in the command console to generate the key:
```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

11. Create a `.env` file in your project folder with the following:

```
LOWDEFY_SECRET_MONGODB_URI = YOUR_MONGODB_CONNECTION_STRING
LOWDEFY_SECRET_OPENID_CLIENT_ID = YOUR_AUTHO_CLIENT_ID
LOWDEFY_SECRET_OPENID_CLIENT_SECRET = YOUR_AUTHO_CLIENT_SECRET
LOWDEFY_SECRET_OPENID_DOMAIN = YOUR_AUTHO_DOMAIN
LOWDEFY_SECRET_JWT_SECRET = YOUR_SECRET_KEY
```

The `LOWDEFY_SECRET_OPENID_DOMAIN` should contain the `https://` URL protocol prefix.

12. In the command console, navigate to your project folder and run the Lowdefy CLI: `npx lowdefy@latest dev`.

## Lowdefy documentation

https://docs.lowdefy.com

## Licence

MIT
