const express = require("express");
const router = express.Router();

const authenticateToken = require("../Middlewares/authMiddleware");

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById,
  deleteAllEvents,
} = require("../Controllers/eventController");
/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API endpoints for managing events
 */
/**
 * @swagger
 * /events:
 *   post:
 *     tags:
 *       - Events
 *     summary: Create a new event or events
 *     description: Create a new event with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the event.
 *               description:
 *                 type: string
 *                 description: A brief description of the event.
 *               location:
 *                 type: object
 *                 properties:
 *                   venueName:
 *                     type: string
 *                     description: The name of the venue where the event will take place.
 *                   address:
 *                     type: string
 *                     description: The street address of the venue.
 *                   city:
 *                     type: string
 *                     description: The city where the event will take place.
 *                   state:
 *                     type: string
 *                     description: The state or province where the event will take place.
 *                   postalCode:
 *                     type: string
 *                     description: The postal code of the event location.
 *                   country:
 *                     type: string
 *                     description: The country where the event will take place.
 *               category:
 *                 type: string
 *                 enum: [music, sports, conference]
 *                 description: The category of the event.
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 description: The start date and time of the event.
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 description: The end date and time of the event.
 *               attendeesLimit:
 *                 type: integer
 *                 description: The maximum number of attendees allowed for the event.
 *               price:
 *                 type: string
 *                 description: The price of the event. Specify as a number or "Free".
 *               registrationDeadline:
 *                 type: string
 *                 format: date-time
 *                 description: The deadline for event registration.
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *                 description: The status of the event.
 *     responses:
 *       '201':
 *         description: Event created successfully.
 *       '400':
 *         description: Invalid request, such as missing or invalid parameters.
 *       '500':
 *         description: Internal server error.
 */

//create an event
router.post("/", createEvent);

/**
 * @swagger
 
 * /events:
 *   get:
 *     tags:
 *       - Events
 *     summary: Retrieve all events
 *     description: Retrieve a list of all events stored in the database
 *     responses:
 *       '200':
 *         description: A list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 *       '500':
 *         description: Internal Server Error
 */

// //see all list events
router.get("/", getAllEvents);

// //see a particular event by eventID
/**
 * @swagger
 * /events/{eventId}:
 *   get:
 *     tags:
 *       - Events
 *     summary: Get an event by ID
 *     description: Retrieve information about a specific event using its ID.
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event to retrieve
 *     responses:
 *       '200':
 *         description: Successfully retrieved the event
 *       '400':
 *         description: Invalid request, such as missing or invalid parameters
 *       '404':
 *         description: Event not found with the provided ID
 *       '500':
 *         description: Internal server error
 */

router.get("/eventID/:eventId", getEventById);
// //update an existing event

/**
 * @swagger
 * /events/{eventId}:
 *   put:
 *     tags:
 *       - Events
 *     summary: Update an event by ID
 *     description: Update information about a specific event using its ID.
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event to update
 *       - in: body
 *         name: event
 *         description: The event object with updated information
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             description:
 *               type: string
 *             location:
 *               type: object
 *               properties:
 *                 venueName:
 *                   type: string
 *                 address:
 *                   type: string
 *                 city:
 *                   type: string
 *                 state:
 *                   type: string
 *                 postalCode:
 *                   type: string
 *                 country:
 *                   type: string
 *             category:
 *               type: string
 *               enum: [music, sports, conference]
 *             startDate:
 *               type: string
 *               format: date-time
 *             endDate:
 *               type: string
 *               format: date-time
 *             attendeesLimit:
 *               type: integer
 *             price:
 *               type: string
 *             registrationDeadline:
 *               type: string
 *               format: date-time
 *             status:
 *               type: string
 *               enum: [active, inactive]
 *     responses:
 *       '200':
 *         description: Successfully updated the event
 *       '400':
 *         description: Invalid request, such as missing or invalid parameters
 *       '404':
 *         description: Event not found with the provided ID
 *       '500':
 *         description: Internal server error
 */

router.put("/eventID/:eventId", updateEventById);

// //delete an event
/**
 * @swagger
 * /events/{eventId}:
 *   delete:
 *     tags:
 *       - Events
 *     summary: Delete an event by ID
 *     description: Delete a specific event using its ID.
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event to delete
 *     responses:
 *       '200':
 *         description: Event deleted successfully
 *       '400':
 *         description: Invalid request, such as missing or invalid parameters
 *       '404':
 *         description: Event not found with the provided ID
 *       '500':
 *         description: Internal server error
 */

router.delete("/eventID/:eventId", authenticateToken, deleteEventById);

// delete All Events

/**
 * @swagger
 * /events:
 *   delete:
 *     tags:
 *       - Events
 *     summary: Delete all events
 *     description: Delete all events from the database.
 *     responses:
 *       '204':
 *         description: All events deleted successfully
 *       '404':
 *         description: No events found to delete
 *       '500':
 *         description: Internal server error
 */

router.delete("/", authenticateToken, deleteAllEvents);

module.exports = router;
