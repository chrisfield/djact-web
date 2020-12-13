# DJACT-WEB A starter/demo react frontend

A starter/demo React web frontend written in Typescript. An Django implemention of the backend it uses can be found [here](https://github.com/chrisfield/djact-api/)

Includes:
- routing
- authentification

The authentification makes api calls to a Django app that implements [REST framework JWT](https://jpadilla.github.io/django-rest-framework-jwt/)

## Getting Started
Check the node version. This was developed on `v14.7.0` but it is likely to work on earlier versions too.
### Clone the repo & cd to its root folder:
```
git clone git@github.com:chrisfield/djact-web.git
cd djact-web
```

### Install dependencies
```
yarn install
```
or Use `npm` if you prefer

### Override enviroment variables as needed
Rather than editing `.env` it is better to create a `.env.local` file.

### Run the server
yarn start


### CORS errors
If you get cross origin errors you may need to add the frontend url (like http://localhost:3030) to`CORS_ORIGIN_WHITELIST` in [django api app settings.py](https://github.com/chrisfield/djact-api/blob/master/mysite/settings.py).  