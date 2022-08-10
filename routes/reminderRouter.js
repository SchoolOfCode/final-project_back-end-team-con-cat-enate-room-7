import pg from "pg";
import express, { Router } from "express";
import { query } from "../db/index.js";
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
import {
  getAllReminders,
  getPetReminders,
  createNewReminder,
  updateReminder,
  deleteReminderById,
} from "../models/remindersModels.js";

const reminderRouter = express.Router(cors(), jsonParser);

reminderRouter.get("/", async function (req, res) {
  if(req.query.pet_id){
    const params = req.query.pet_id;
    const results = await getPetReminders(params);
    res.json({
      success: true,
      message: `Displaying all reminders for pet with id = ${params}`,
      payload: results,
    });
    return
  }

  res.send("Please put in your pet id after reminders/?pet_id= to get schedule info")
  return
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

reminderRouter.patch("/:id", async function (req, res) {
  const id = req.params.id;
  const updatedReminder = req.body
  const results = await updateReminder(id, updatedReminder);
  res.json({
    success: true,
    message: `Updated reminder with id ${id}`,
    payload: results,
});
});

reminderRouter.delete("/:id", async function (req, res) {
  const id = req.params.id
  const results = await deleteReminderById(id)
  res.json({
    success: true,
    message: `Deleted reminder with id ${id}`,
    payload: results,

  });
});


export default reminderRouter;
