import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointmentController.mjs";

const router = express.Router();

// Route to create a new appointment
router.post("/", createAppointment);

// Route to get all appointments
router.get("/", getAppointments);

// Route to get a single appointment by ID
router.get("/:id", getAppointmentById);

// Route to update an appointment by ID
router.put("/:id", updateAppointment);

// Route to delete an appointment by ID
router.delete("/:id", deleteAppointment);

export default router;
