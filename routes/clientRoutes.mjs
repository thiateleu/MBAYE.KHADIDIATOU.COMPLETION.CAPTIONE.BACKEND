import express from "express";
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.mjs";

const router = express.Router();

/// Route to get all clients and create a new client ///

router
  .route("/")
  .get(getClients) //GET/api/clients - Get all clients ///
  .post(createClient); // POST /api/clients - Create a new client

/// Route to update and delete a specific client by ID

router
  .route("/:id")
  .put(updateClient) /// PUT /api/clients/:id -Update a client by ID ///
  .delete(deleteClient); /// DELETE /api/clients/:id -Delete a client by ID

export default router;
