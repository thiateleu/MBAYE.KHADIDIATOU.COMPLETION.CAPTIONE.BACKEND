import Appointment from "../models/Appointment.mjs";

export const createAppointment = async (req, res) => {
  try {
    const { date, time, clientId, serviceId } = req.body;

    /// clientId and serviceId are valid ObjectIds
    if (
      !mongoose.Types.ObjectId.isValid(clientId) ||
      !mongoose.Types.ObjectId.isValid(serviceId)
    ) {
      return res.status(400).json({ message: "Invalid client or service ID" });
    }

    const appointment = new Appointment({
      clientId,
      serviceId,
      date,
      time,
    });

    await appointment.save();

    res.status(201).json(appointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
