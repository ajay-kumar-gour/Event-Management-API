# Event Management API

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
