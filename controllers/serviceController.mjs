import Service from "../models/Service.mjs";

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createService = async (req, res) => {
  const { name, description, price, duration } = req.body;
  try {
    const service = new Service({ name, description, price, duration });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateService = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, duration } = req.body;

  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;
    service.duration = duration || service.duration;

    await service.save();
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    await service.remove();
    res.json({ message: "Service removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
