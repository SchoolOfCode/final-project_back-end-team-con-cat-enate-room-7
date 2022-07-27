import pg from "pg";
import express, { Router } from "express";
import { query } from "../db/index.js";
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
import {
    getAllPets,
    createNewPet,
    updatePet,
} from "../models/petsModels.js";

const petsRouter = express.Router(cors(), jsonParser);

petsRouter.get("/", async function (req, res) {
    const results = await getAllPets();
    res.json({
        success: true,
        message: `Displaying all pets`,
        payload: results,

    });
});

petsRouter.post("/", async function (req, res) {
    const newPet = req.body;
    const results = await createNewPet(newPet);
    res.json({
      success: true,
      message: `Created new pet`,
      payload: results,
    });
  });

  petsRouter.put("/:id", async function (req, res) {
    const id = req.params.id;
    const updatedPetInfo = req.body;
    const results = await updatePet(id, updatedPetInfo);
    res.json({
        success: true,
        message: `Updated pet info`,
        payload: results,
    });
  });

export default petsRouter;