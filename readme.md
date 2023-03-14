## General setup
- rename project folder
- set up github repo for main project folder

## Client setup
- cd PROJECT-FOLDER-NAME
- npx create-react-app client
- cd client
- npm i axios react-router-dom
- npm start to start the frontend server
- ctrl c to stop

## Server setup
- create database, probably in compass
- cd server
- go through and rename everything labeled RENAME
- npm i express mongoose cors
- update database name in mongoose.config.js
- run brew services start mongodb-community@5.0 to be able to connect to database
    - can this just always be running?
    - brew services stop mongodb-community@5.0 to stop the service, if necessary
- nodemon server.js to start the backend server
- ctrl c to stop
