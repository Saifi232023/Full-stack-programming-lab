const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
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

    medicines: [
      {
        medicineName: {
          type: String,
          required: true,
        },

        dosage: {
          type: String,
          required: true,
        },

        schedule: {
          type: String,
          required: true,
        },
      },
    ],

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Prescription",
  prescriptionSchema
);