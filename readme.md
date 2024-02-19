# Event Management API

## Technologies Used
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)



The Event Management API provides a comprehensive set of endpoints to manage various aspects of events, including creation, retrieval, updating, and deletion. Additionally, it facilitates user registration for events and retrieval of attendee information.

## Overview

This API enables event organizers to efficiently manage their events and allows users to seamlessly register for and attend events of interest. With intuitive endpoints and robust functionality, the Event Management API simplifies the process of event organization and attendance.

## Features

| Feature               | Description                                                                                      |
|-----------------------|--------------------------------------------------------------------------------------------------|
| Create Events         | Add new events with details such as name, description, location, category, start date, end date, etc. |
| Retrieve Events       | Get a list of all events or retrieve a specific event by its ID.                                 |
| Update Events         | Update existing events with new information.                                                     |
| Delete Events         | Delete events either individually by ID or delete all events at once.                             |
| User Registration     | Users can register by providing their details such as first name, last name, email, and password. |
| User Login            | Registered users can log in using their email and password to access protected endpoints.        |
| Authentication with JWT | JWT tokens are used for user authentication and authorization.                                  |
|Hashing Passwords      | User passwords are securely hashed using bcrypt before storing them in the database, ensuring enhanced security.|
| Search Events         | Search for events by name, location (city), event category, and date range.                       |
| Event Registration    | Allow users to register for events, managing their attendance and providing event organizers with attendee lists. |


## Endpoints

### Home
- `GET /`: Welcome page.

### Events

- `GET /events`: Retrieve a list of all events.
- `GET /events/:eventId`: Retrieve a specific event by its ID.
- `POST /events`: Create a new event.
- `PUT /events/:eventId`: Update an existing event.
- `DELETE /events/:eventId`: Delete an event by its ID.
- `DELETE /events`: Delete all events.

### Authentication

- `POST auth/register`: Register a new user.
- `POST auth/login`: Log in a registered user and generate JWT tokens.

### Search

- `GET /events/search/name/:name`: Search for events by name.
- `GET /events/search/city/:city`: Search for events by location(city).
- `GET /events/search/category/:category`: Search for events by category.
- `GET /events/search/price/:PriceType`: Search for events by PriceType(Paid or Free).
- `GET /events/search/dateRange/:startDate/:endDate`: Search for events within a specified date range.

### Event Registration

- `POST /events/:eventId/register`: Register a user for a specific event.
- `GET /events/:eventId/attendees`: Retrieve a list of attendees for a specific event.
