# Event Management API
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) 	![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 	![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)


Welcome to the Event Management API! This API allows you to manage various aspects of events, including creating, retrieving, updating, and deleting events.

## Features

- **Create Events**: Add new events with details such as name, description, location, category, start date, end date, etc.
- **Retrieve Events**: Get a list of all events or retrieve a specific event by its ID.
- **Update Events**: Update existing events with new information.
- **Delete Events**: Delete events either individually by ID or delete all events at once.

## API Documentation

The API documentation is available using Swagger UI. You can access it at `/api-docs` endpoint when the server is running.

## Installation

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up environment variables by creating a `.env` file.
4. Start the server using `npm start`.

## Environment Variables

- `PORT`: Port number for the server to listen on.
- `MONGODB_URI`: MongoDB connection URI.
- Other environment variables as per your configuration.

## Usage

1. Ensure the server is running.
2. Use API endpoints to interact with events:
   - Create events using `POST /events`.
   - Retrieve events using `GET /events`.
   - Update events using `PUT /events/:eventId`.
   - Delete events using `DELETE /events/:eventId`.
   - Delete all events using `DELETE /events`.



## License

This project is licensed under the [MIT License](LICENSE).
