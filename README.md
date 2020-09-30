# Task-Manager

Simple Task Manager API built with Express and Mongoose. Includes CRUD operations for users and tasks, as well as authentication with bcryptjs.

## User Routes: <code>/users</code>
Create User: <code>POST /</code>

Login User: <code>POST /login</code>

Logout User: <code>POST /logout</code>

Logout User from All Sessions: <code>POST /logoutall</code>

Get User: <code>GET /me</code>

Update User: <code>PATCH /me</code>

Delete User: <code>DELETE /me</code>

Upload Avatar: <code>POST /me/avatar</code>

Delete Avatar: <code>DELETE /me/avatar</code>

## Task Routers: <code>/tasks</code>

Create Task: <code>POST /</code>

Get All Tasks: <code>GET /</code>

Get Task: <code>GET /:id</code>

Update Task: <code>PATCH /:id</code>

Delete Task: <code>DELETE /:id</code>
