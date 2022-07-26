import pg from "pg";
import express from "express";
import { query } from "../db/index.js";
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
import { getSymptomsByUserId } from "../models/symptomsModels.js";

const symptomsRouter = express.Router();

// get by user ID
symptomsRouter.get("/:id", cors(), async function (req, res) {
  const id = req.params.id;
  const result = await getSymptomsByUserId(id);
  res.json({
    success: true,
    message: `display user with id ${id}`,
    payload: result,
  });
});
