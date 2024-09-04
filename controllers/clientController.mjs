import Client from "../models/Client.mjs";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createClient = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const client = new Client({ name, email, phone, address });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;

  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    client.name = name || client.name;
    client.email = email || client.email;
    client.phone = phone || client.phone;
    client.address = address || client.address;

    await client.save();
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    await client.remove();
    res.json({ message: "Client removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
