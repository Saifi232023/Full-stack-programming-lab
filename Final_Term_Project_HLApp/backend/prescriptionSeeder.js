require("dotenv").config();
const connectDB = require("./config/db");
const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");
const Appointment = require("./models/Appointment");
const Prescription = require("./models/Prescription");
const seedPrescriptions = async () => {
try {
await connectDB();
console.log("Clearing old appointments and prescriptions...");
await Appointment.deleteMany({});
await Prescription.deleteMany({});

const doctors = await Doctor.find().limit(5);
const patients = await Patient.find().limit(5);

if (doctors.length < 5 || patients.length < 5) {
  console.error("Not enough doctors or patients. Run seeder.js first.");
  process.exit(1);
}

const appointmentsData = [
  {
    patient: patients[0]._id,
    doctor: doctors[0]._id,
    appointmentDate: new Date("2025-01-10"),
    status: "Completed",
    reason: "Chest pain and shortness of breath",
  },
  {
    patient: patients[1]._id,
    doctor: doctors[1]._id,
    appointmentDate: new Date("2025-01-15"),
    status: "Completed",
    reason: "Frequent headaches and dizziness",
  },
  {
    patient: patients[2]._id,
    doctor: doctors[2]._id,
    appointmentDate: new Date("2025-01-20"),
    status: "Completed",
    reason: "Knee pain and difficulty walking",
  },
  {
    patient: patients[3]._id,
    doctor: doctors[3]._id,
    appointmentDate: new Date("2025-01-25"),
    status: "Completed",
    reason: "Skin rash and itching",
  },
  {
    patient: patients[4]._id,
    doctor: doctors[4]._id,
    appointmentDate: new Date("2025-02-01"),
    status: "Completed",
    reason: "Fever and cough in child",
  },
  {
    patient: patients[0]._id,
    doctor: doctors[0]._id,
    appointmentDate: new Date("2025-02-10"),
    status: "Completed",
    reason: "Follow-up for blood pressure",
  },
  {
    patient: patients[1]._id,
    doctor: doctors[1]._id,
    appointmentDate: new Date("2025-02-18"),
    status: "Completed",
    reason: "Follow-up for migraine treatment",
  },
  {
    patient: patients[2]._id,
    doctor: doctors[2]._id,
    appointmentDate: new Date("2025-03-05"),
    status: "Approved",
    reason: "Post-surgery checkup",
  },
  {
    patient: patients[3]._id,
    doctor: doctors[3]._id,
    appointmentDate: new Date("2025-03-12"),
    status: "Approved",
    reason: "Acne treatment follow-up",
  },
  {
    patient: patients[4]._id,
    doctor: doctors[4]._id,
    appointmentDate: new Date("2025-03-20"),
    status: "Pending",
    reason: "Child vaccination schedule",
  },
];

console.log("Creating appointments...");
const appointments = await Appointment.insertMany(appointmentsData);

const prescriptionsData = [
  {
    appointment: appointments[0]._id,
    patient: patients[0]._id,
    doctor: doctors[0]._id,
    medicines: [
      { medicineName: "Aspirin", dosage: "75mg", schedule: "Once daily after breakfast" },
      { medicineName: "Atenolol", dosage: "50mg", schedule: "Once daily at night" },
      { medicineName: "Amlodipine", dosage: "5mg", schedule: "Once daily in the morning" },
    ],
    notes: "Patient has mild hypertension. Avoid salty food. Monitor BP weekly. Return if chest pain worsens.",
  },
  {
    appointment: appointments[1]._id,
    patient: patients[1]._id,
    doctor: doctors[1]._id,
    medicines: [
      { medicineName: "Sumatriptan", dosage: "50mg", schedule: "As needed during migraine attack" },
      { medicineName: "Propranolol", dosage: "40mg", schedule: "Twice daily" },
      { medicineName: "Paracetamol", dosage: "500mg", schedule: "Every 6 hours if needed" },
    ],
    notes: "Chronic migraine with aura. Avoid bright screens. Stay hydrated. Follow up in 4 weeks.",
  },
  {
    appointment: appointments[2]._id,
    patient: patients[2]._id,
    doctor: doctors[2]._id,
    medicines: [
      { medicineName: "Ibuprofen", dosage: "400mg", schedule: "Twice daily after meals" },
      { medicineName: "Calcium + Vitamin D", dosage: "1000mg / 800IU", schedule: "Once daily" },
      { medicineName: "Diclofenac Gel", dosage: "Apply thin layer", schedule: "Three times daily on knee" },
    ],
    notes: "Early stage osteoarthritis. Physiotherapy recommended. Avoid high-impact activities. Follow up in 6 weeks.",
  },
  {
    appointment: appointments[3]._id,
    patient: patients[3]._id,
    doctor: doctors[3]._id,
    medicines: [
      { medicineName: "Cetirizine", dosage: "10mg", schedule: "Once daily at night" },
      { medicineName: "Betamethasone Cream", dosage: "Apply thin layer", schedule: "Twice daily on affected area" },
      { medicineName: "Vitamin E Capsule", dosage: "400IU", schedule: "Once daily after meal" },
    ],
    notes: "Allergic dermatitis. Avoid synthetic fabrics. Keep skin moisturized. Do not scratch affected area.",
  },
  {
    appointment: appointments[4]._id,
    patient: patients[4]._id,
    doctor: doctors[4]._id,
    medicines: [
      { medicineName: "Amoxicillin Syrup", dosage: "250mg/5ml", schedule: "Three times daily for 7 days" },
      { medicineName: "Paracetamol Syrup", dosage: "120mg/5ml", schedule: "Every 6 hours if fever above 38°C" },
      { medicineName: "Zinc Supplement", dosage: "10mg", schedule: "Once daily for 14 days" },
    ],
    notes: "Viral upper respiratory infection with secondary bacterial involvement. Plenty of fluids. Return if no improvement in 3 days.",
  },
  {
    appointment: appointments[5]._id,
    patient: patients[0]._id,
    doctor: doctors[0]._id,
    medicines: [
      { medicineName: "Ramipril", dosage: "5mg", schedule: "Once daily in the morning" },
      { medicineName: "Hydrochlorothiazide", dosage: "25mg", schedule: "Once daily" },
    ],
    notes: "BP improving. Continue current medication. Reduce stress. Next follow-up in 8 weeks.",
  },
  {
    appointment: appointments[6]._id,
    patient: patients[1]._id,
    doctor: doctors[1]._id,
    medicines: [
      { medicineName: "Topiramate", dosage: "25mg", schedule: "Once daily at bedtime" },
      { medicineName: "Paracetamol", dosage: "500mg", schedule: "Every 8 hours if needed" },
    ],
    notes: "Migraine frequency reduced. Continue preventive therapy. Maintain sleep schedule. Follow up in 6 weeks.",
  },
];

console.log("Creating prescriptions...");
await Prescription.insertMany(prescriptionsData);

console.log("");
console.log("================================");
console.log("PRESCRIPTION SEED COMPLETED");
console.log(`${appointments.length} Appointments Created`);
console.log(`${prescriptionsData.length} Prescriptions Created`);
console.log("Patients seeded: Muhammad Ali, Fatima Khan, Ayesha Noor, Abdullah Ahmed, Hira Malik");
console.log("Doctors seeded: Ahmed Khan, Ali Raza, Usman Sheikh, Bilal Ahmed, Hamza Tariq");
console.log("================================");

process.exit(0);
} catch (error) {
console.error(error);
process.exit(1);
}
};
seedPrescriptions();