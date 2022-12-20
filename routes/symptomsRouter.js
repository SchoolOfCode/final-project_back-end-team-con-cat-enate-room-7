import pg from "pg";
import express, { Router } from "express";
import { query } from "../db/index.js";
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
import {
	createNewSymptom,
  deleteSymptomByID,
  getSymptomsByPetId,
  getSymptomsBySymptomId
} from "../models/symptomsModels.js";

const symptomsRouter = express.Router(cors(), jsonParser);

symptomsRouter.get("/:id", async function (req, res) {

	if(req.query.symptoms_id){
		const petId = req.params.id;
		const symptomsId = req.query.symptoms_id
		const results = await getSymptomsBySymptomId(petId, symptomsId)
		res.json({
			success: true,
			message: `Display all incidents of symptom id ${symptomsId} for pet with id ${petId}`,
			payload: results,
		});
		return
	}

	const id = req.params.id;
	const results = await getSymptomsByPetId(id);
	res.json({
		success: true,
		message: `Display all symptoms of pet with id ${id}`,
		payload: results,
	});
	return
});

symptomsRouter.get("/", async function (req, res) {
res.send("Please put in your pet id after symptoms/ to get symptom info");
})



symptomsRouter.post("/", async function (req, res) {
	const newSymptom = req.body;
	const results = await createNewSymptom(newSymptom);
	res.json({
		success: true,
		message: `Create new symptom data`,
		payload: results,
	});
});

symptomsRouter.delete("/:id", async function (req, res) {
  const id = req.params.id;
  const results = await deleteSymptomByID(id)
  res.json({
    success: true,
    message: `Deleted symptom with ID ${id}, displaying remaining data`,
    payload: results,
  })
})

export default symptomsRouter;
