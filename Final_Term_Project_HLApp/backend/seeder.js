require("dotenv").config();

const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");

const User = require("./models/User");
const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");

const seedData = async () => {
  try {
    await connectDB();

    console.log(
      "Removing old doctors/patients..."
    );

    await Doctor.deleteMany({});
    await Patient.deleteMany({});

    await User.deleteMany({
      role: { $ne: "admin" },
    });

    const hashedPassword =
      await bcrypt.hash("123456", 10);

    const doctorNames = [
      "Ahmed Khan",
      "Ali Raza",
      "Usman Sheikh",
      "Bilal Ahmed",
      "Hamza Tariq",
      "Awais Malik",
      "Saad Khan",
      "Farhan Iqbal",
      "Umair Butt",
      "Zain Ali",
      "Asad Mehmood",
      "Talha Khan",
      "Hassan Raza",
      "Danish Ali",
      "Imran Shah",
    ];

    const specializations = [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Dermatology",
      "Pediatrics",
      "ENT",
      "Oncology",
      "Psychiatry",
      "General Surgery",
      "Radiology",
      "Urology",
      "Gastroenterology",
      "Pulmonology",
      "Ophthalmology",
      "Dental Surgery",
    ];

    const doctors = [];

    console.log(
      "Creating doctors..."
    );

    for (let i = 0; i < 15; i++) {
      const doctor =
        await Doctor.create({
          name: doctorNames[i],
          specialization:
            specializations[i],
          experience: 3 + i,
          email:
            doctorNames[i]
              .toLowerCase()
              .replace(" ", ".") +
            "@hms.com",
          phone:
            "03001234" +
            String(i).padStart(2, "0"),
        });

      doctors.push(doctor);

      await User.create({
        name: doctor.name,
        email: doctor.email,
        password:
          hashedPassword,
        role: "doctor",
      });
    }

    const patientNames = [
      "Muhammad Ali",
      "Fatima Khan",
      "Ayesha Noor",
      "Abdullah Ahmed",
      "Hira Malik",
      "Sara Khan",
      "Usama Tariq",
      "Noor Fatima",
      "Amna Riaz",
      "Ali Hassan",
      "Maryam Ahmed",
      "Muneeb Khan",
      "Iqra Noor",
      "Ahmad Bilal",
      "Laiba Tariq",
    ];

    console.log(
      "Creating patients..."
    );

    for (let i = 0; i < 15; i++) {
      const patient =
        await Patient.create({
          name: patientNames[i],
          age: 20 + i,
          gender:
            i % 2 === 0
              ? "Male"
              : "Female",
          email:
            patientNames[i]
              .toLowerCase()
              .replace(" ", ".") +
            "@gmail.com",
          phone:
            "03111234" +
            String(i).padStart(2, "0"),
          assignedDoctor:
            doctors[i]._id,
        });

      await User.create({
        name: patient.name,
        email: patient.email,
        password:
          hashedPassword,
        role: "patient",
      });
    }

    console.log("");
    console.log(
      "================================"
    );
    console.log(
      "SEED COMPLETED SUCCESSFULLY"
    );
    console.log(
      "15 Doctors Created"
    );
    console.log(
      "15 Patients Created"
    );
    console.log(
      "30 User Accounts Created"
    );
    console.log(
      "Password for all users: 123456"
    );
    console.log(
      "================================"
    );

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();