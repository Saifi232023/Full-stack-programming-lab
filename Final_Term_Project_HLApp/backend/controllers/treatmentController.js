const Treatment = require("../models/Treatment");

const createTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.create(req.body);

    res.status(201).json({
      success: true,
      treatment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find()
      .populate("patient")
      .populate("doctor")
      .populate("appointment");

    res.status(200).json({
      success: true,
      treatments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTreatmentStatus = async (
  req,
  res
) => {
  try {
    const treatment =
      await Treatment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json({
      success: true,
      treatment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTreatment,
  getTreatments,
  updateTreatmentStatus,
};