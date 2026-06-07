const express = require("express");

const {
  createTreatment,
  getTreatments,
  updateTreatmentStatus,
} = require("../controllers/treatmentController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createTreatment);

router.get("/", protect, getTreatments);

router.put(
  "/:id",
  protect,
  updateTreatmentStatus
);

module.exports = router;