const express = require("express");

const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  assignDoctor,
} = require("../controllers/patientController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, createPatient)
  .get(protect, getPatients);

router.route("/:id")
  .get(protect, getPatientById)
  .put(protect, updatePatient)
  .delete(protect, deletePatient);

router.put(
  "/assign-doctor/:id",
  protect,
  assignDoctor
);

module.exports = router;