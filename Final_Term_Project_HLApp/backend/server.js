const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const treatmentRoutes = require(
  "./routes/treatmentRoutes"
);
const notificationRoutes = require(
  "./routes/notificationRoutes"
);

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments",appointmentRoutes);
app.use("/api/patients", patientRoutes);
app.use(
  "/api/treatments",
  treatmentRoutes
);
const prescriptionRoutes = require(
  "./routes/prescriptionRoutes"
);
app.use(
  "/api/prescriptions",
  prescriptionRoutes
);
app.use(
  "/api/notifications",
  notificationRoutes
);


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hospital Management API Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});