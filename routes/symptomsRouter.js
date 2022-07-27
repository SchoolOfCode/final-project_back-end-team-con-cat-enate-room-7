import pg from "pg";
import express, { Router } from "express";
import { query } from "../db/index.js";
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
import {
  getAllSymptoms,
	getSymptomsByUserId,
	createNewSymptom,
  deleteSymptomByID
} from "../models/symptomsModels.js";

const symptomsRouter = express.Router(cors(), jsonParser);

symptomsRouter.get("/:id", async function (req, res) {
	const id = req.params.id;
	console.log(id);
	const results = await getSymptomsByUserId(id);
	res.json({
		success: true,
		message: `Display user with id ${id}`,
		payload: results,
	});
});

symptomsRouter.get("/", async function (req, res) {
  const results = await getAllSymptoms();
res.json({
		success: true,
		message: `Displaying all symptom results`,
		payload: results,
	});
})



symptomsRouter.post("/", async function (req, res) {
	const newSymptom = req.body;
	console.log(newSymptom);
	const results = await createNewSymptom(newSymptom);
	res.json({
		success: true,
		message: `Create new symptom data`,
		payload: results,
	});
});

symptomsRouter.delete("/:id", async function (req, res) {
  const id = req.params.id;
  console.log(id)
  const results = await deleteSymptomByID(id)
  res.json({
    success: true,
    message: `Deleted symptom with ID ${id}, displaying remaining data`,
    payload: results,
  })
})

export default symptomsRouter;
