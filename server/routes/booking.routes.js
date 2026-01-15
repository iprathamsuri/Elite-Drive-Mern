import express from "express";
import { createBooking, getBookings } from "../controllers/booking.controller.js";

const router = express.Router();
router.post("/", createBooking);
router.get("/:email", getBookings);
export default router;
