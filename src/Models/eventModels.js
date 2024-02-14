const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    location: {
      venueName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },

    category: {
      type: String,
      required: true,
      enum: [
        "conference",
        "workshop",
        "seminar",
        "fashion",
        "concert",
        "exhibition",
        "sports",
        "festival",
        "other",
      ],
      default: "other",
    },

    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    attendeesLimit: {
      type: Number,
      min: 0,
    },
    price: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      validate: {
        validator: function (value) {
          return typeof value == "number" || value == "Free";
        },
        message: 'Price must be a number or "Free"',
      },
    },

    registrationDeadline: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "past"],
      default: "upcoming",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

/*

Name
Description
Location -- { VenueName,Adresss,City,State,PostalCode,Country}
Category
StartDate
EndDate
Attendees Limit
Price
RegistrationDeadline
Status

*/
