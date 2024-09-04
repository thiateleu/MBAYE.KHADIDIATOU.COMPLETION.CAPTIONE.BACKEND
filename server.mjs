import express from "express";
import mongoose from "mongoose";
import cors from "cors";

////// Create the Express app ////
const app = express();
const PORT = 5050;

////// Middleware    /////
app.use(cors());
app.use(express.json());

////// Connect to MongoDB /////
mongoose
  .connect(
    "mongodb+srv://thiateleu:Bayeniasse@mongopractice.kj0ofkw.mongodb.net/thiateleu-cleaning"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

///// Schema Model ////////////

const appointmentSchema = new mongoose.Schema({
  serviceType: String,
  date: Date,
  time: String,
  status: String,
  feedback: String,
});

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
const Service = mongoose.model("Service", serviceSchema);

app.get("/", (req, res) => {
  res.send("Welcome to the API! The server is running.");
});

//////// Routes  ///////
app.get("/api/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

app.post("/api/appointments", async (req, res) => {
  try {
    const { serviceType, date, time } = req.body;

    if (!serviceType || !date || !time) {
      return res
        .status(400)
        .json({ message: "Service type, date, and time are required" });
    }

    const newAppointment = new Appointment({
      serviceType,
      date,
      time,
      status: "Pending",
    });
    await newAppointment.save();

    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: "Error creating appointment" });
  }
});

app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services" });
  }
});

//////////// connect to the server /////////////
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
