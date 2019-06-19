### Running this project

Before getting started run the following Query in your local Postgres Server.

CREATE DATABASE TodoService;

CREATE TABLE todo
(
  todo_id bigserial,
  label Text NOT NULL,
  description Text,
  createdOn timestamptz NOT NULL,
  createdBy Text NOT NULL,
  isComplete BOOLEAN NOT NULL,
  CONSTRAINT todo_pk PRIMARY KEY (todo_id)
);

Once the Database and Table is created you will need to install the dependencies
for the client and server portion of this project.

Installing node modules for server:  In the root of the project run npm i

Installing node modules for the client app: cd client && npm i.

Once all the packages are installed you can run the TodoService
by running npm start in the root of the project(it will run on localhost:3000).

Once the server is running you can run the client angular app by running npm start in the
client folder(make sure it is from another terminal than the one you use to run the service). Once running you can access the app from localhost:4200

### helpful links

https://auth0.com/blog/full-stack-typescript-apps-part-1-developing-backend-apis-with-nestjs/


