const Prescription = require("../models/Prescription");

const createPrescription = async (req, res) => {
  try {
    const prescription =
      await Prescription.create(req.body);

    res.status(201).json({
      success: true,
      prescription,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPrescriptions = async (
  req,
  res
) => {
  try {
    const prescriptions =
      await Prescription.find()
        .populate("patient")
        .populate("doctor")
        .populate("appointment");

    res.status(200).json({
      success: true,
      prescriptions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPatientHistory = async (
  req,
  res
) => {
  try {
    const prescriptions =
      await Prescription.find({
        patient: req.params.patientId,
      })
        .populate("doctor")
        .populate("appointment");

    res.status(200).json({
      success: true,
      prescriptions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPrescription,
  getPrescriptions,
  getPatientHistory,
};