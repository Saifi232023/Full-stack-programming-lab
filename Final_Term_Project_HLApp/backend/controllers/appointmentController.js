const Appointment = require("../models/Appointment");

const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(
      req.body
    );

    res.status(201).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient")
      .populate("doctor");

    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const approveAppointment = async (req, res) => {
  try {
    const appointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        {
          status: "Approved",
          doctor: req.body.doctorId,
        },
        { new: true }
      );

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const rejectAppointment = async (req, res) => {
  try {
    const appointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        {
          status: "Rejected",
        },
        { new: true }
      );

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  approveAppointment,
  rejectAppointment,
};