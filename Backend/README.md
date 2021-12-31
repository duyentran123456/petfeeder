# How to run PetFeeder backend

## Requirements: 
1. Node 
2. MongoDB
3. Postman (to test API)

First, you need to clone this project, then do as follow:
## 1. Create .env
Create `.env` file in project folder (copy from `.env.example`)

Change `.env` value to your preferences
## 2. Install packages
`npm install`

## 3. Run project
`npm start`

## 3. Test API with Postman
Open Postman and import file `postman/postman.json` 

Then test with Postman, you may need to change some of the request body data

## Notes:
1. In database petfeeder, collection admins, add this document to have an admin account (the password before hashed is 'admin'): 
```json
{
    "username" : "admin",
    "email" : "your-email@gmail.com",
    "password" : "$2a$10$1JEXONHdHpqUgXzBxslDD.1.VKn4EcdSePWqn3b3s9QJWa.MjY/ZC"
}
```
2. `EMAIL_PASSWORD` in `.env`: Go to your Google account -> Security -> Application password, paste that password to `.env`