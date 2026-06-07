const express = require("express");

const {
  createAppointment,
  getAppointments,
  approveAppointment,
  rejectAppointment,
} = require("../controllers/appointmentController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createAppointment);

router.get("/", protect, getAppointments);

router.put(
  "/approve/:id",
  protect,
  approveAppointment
);

router.put(
  "/reject/:id",
  protect,
  rejectAppointment
);

module.exports = router;