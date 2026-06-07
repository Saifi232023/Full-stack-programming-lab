const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema(
  {
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    diagnosis: {
      type: String,
      required: true,
    },

    physicalCheckup: {
      type: String,
      required: true,
    },

    treatmentStatus: {
      type: String,
      enum: [
        "Ongoing",
        "Improving",
        "Recovered"
      ],
      default: "Ongoing",
    },

    followUpDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Treatment",
  treatmentSchema
);