const express = require("express");
const router = express.Router();

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
 *   name: Event
 *   description: API endpoints for managing events
 */

//create an event
router.post("/", createEvent);

/**
 * @swagger
 
 * /events:
 *   get:
 *     tags:
 *       - Event
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
 *       - Event
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

router.get("/:eventId", getEventById);
// //update an existing event

/**
 * @swagger
 * /events/{eventId}:
 *   put:
 *     tags:
 *       - Event
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

router.put("/:eventId", updateEventById);

// //delete an event
/**
 * @swagger
 * /events/{eventId}:
 *   delete:
 *     tags:
 *       - Event
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

router.delete("/:eventId", deleteEventById);

// delete All Events

/**
 * @swagger
 * /events:
 *   delete:
 *     tags:
 *       - Event
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

router.delete("/", deleteAllEvents);

module.exports = router;
