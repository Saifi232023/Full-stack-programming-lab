const express = require("express");

const {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, createDoctor)
  .get(protect, getDoctors);

router.route("/:id")
  .get(protect, getDoctorById)
  .put(protect, updateDoctor)
  .delete(protect, deleteDoctor);

module.exports = router;