# Introduction
Thank you for your interest in the exciting career opportunities with
North American Savings Bank (NASB)!  This challenge provides you with an
opportunity to demonstrate your awesome problem solving ability,
applying any technology you are most comfortable with.  We fully recognize and
appreciate the sacrifice you are taking to complete this challenge. We
anticipate a solution taking a few days to develop.  Questions and comments are
welcome!  Please email Dan Morton (dmorton@nasb.com) with any questions.

# Challenge
Please provide a working webapp for authoring a TODO list.  Users will need the
ability to create and complete tasks.  Choose any technology, platform, or
coding language you would like to solve this problem.  Please fork this
repository to complete and store your solution, while updating your README.md
with a description of your solution, including reasons for the various decisions
made while solving the problem and what (if any) obstacles you ran into.

# About NASB
Here at NASB our engineering teams utilize a wide variety of technologies to
solve the many challenging problems to better serve our customers.  Our
engineers focus on cloud computing with a core technology stack including
.net, Java, Python, various JavaScript platforms including Angular and NodeJS,
with an emphasis on devops practices to deliver quality products in a CI/CD
model.


## Larry Lane Todo App

### Technology Stack
* NestJS APIs with Postgres
* Angular 7 frontend

I choose the above technologies for speed of development, especially since they
both utilize the same language(TypeScript), Angular offers alot of things out of box that
you don't have to write yourself.  NestJS is a great framework for developing api's and like 
Angular it provides a lot of out of of the box functionality. I also enjoy that they both have a 
CLI making development a lot nicer.

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


