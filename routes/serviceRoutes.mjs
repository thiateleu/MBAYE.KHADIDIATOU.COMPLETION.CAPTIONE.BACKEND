import express from "express";
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController.mjs";

const router = express.Router();

/// Route to get all services and create a new service ///
router
  .route("/")
  .get(getServices) //GET/api/services - Get all services ///
  .post(createService); // POST /api/services - Create a new service

/// Route to update and delete a specific service by ID
router
  .route("/:id")
  .put(updateService) /// PUT /api/services/:id -Update a service by ID ///
  .delete(deleteService); /// DELETE /api/services/:id -Delete a service by ID

export default router;
