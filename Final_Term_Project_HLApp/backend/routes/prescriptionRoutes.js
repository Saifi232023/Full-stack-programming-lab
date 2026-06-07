const express = require("express");

const {
  createPrescription,
  getPrescriptions,
  getPatientHistory,
} = require("../controllers/prescriptionController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createPrescription);

router.get("/", protect, getPrescriptions);

router.get(
  "/history/:patientId",
  protect,
  getPatientHistory
);

module.exports = router;