# Users-API

## ServerSide

> a Node.js Server, that provides Users API

## Live Demo
To see the server in action, go to [User API Server](https://users2.herokuapp.com/)

## API

```
Get users list
    - GET /api/admin/users
    - Should return a list of all users
```


```
Create a new User
    - POST /api/users
    - The http Request Should contain JSON Body with the following properties:
       * nickname
       * username
       * password
       * status
```

## User Schema
    nickname: non empty String, up to 11 characters
    username: non empty String, up to 50 characters
    password: non empty String, up to 200 characters
    status: an integer between 0-255.


## Installation - For Local use

  * Clone/Download this repo.
  * Execute in CMD\Terminal:
    ```
    npm install
    npm start
    ``` 
  * Set MongoDB URL or use MongoDB locally
  * Server should run under http://localhost:8000


