import pg from "pg";
import express, { Router } from "express";
import { query } from "../db/index.js";
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
import {
  getAllReminders,
  createNewReminder,
} from "../models/remindersModels.js";

const reminderRouter = express.Router(cors(), jsonParser);

reminderRouter.get("/", async function (req, res) {
  const results = await getAllReminders();
  res.json({
    success: true,
    message: `Displaying all reminders`,
    payload: results,
  });
});

reminderRouter.post("/", async function (req, res) {
  const newReminder = req.body;
  const results = await createNewReminder(newReminder);
  res.json({
    success: true,
    message: `Created new reminder`,
    payload: results,
  });
});

export default reminderRouter;
