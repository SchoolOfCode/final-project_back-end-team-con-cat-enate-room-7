import pg from "pg";
import express, { Router } from "express";
import { query } from "../db/index.js";
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
import {
    getAllPets,
    getPet,
    createNewPet,
    updatePet,
    getPetNoUser
} from "../models/petsModels.js";

const petsRouter = express.Router(cors(), jsonParser);


petsRouter.get("/", async function (req, res) {
  if (req.query.pet_id){
        const pet_id = req.query.pet_id;
        const results = await getPetNoUser(pet_id)
        res.json({
          success: true,
          message: `Display the pet with id ${pet_id}`,
          payload: results,
        });
        return
  }
})
petsRouter.get("/:id", async function (req, res) {

  if(req.query.pet_id){
      const user_id = req.params.id;
        const pet_id = req.query.pet_id;
        const results = await getPet(user_id, pet_id)
        res.json({
          success: true,
          message: `Display the pet with id ${pet_id}`,
          payload: results,
        });
        return
  }

  const user_id = req.params.id;
    const results = await getAllPets(user_id);
    res.json({
        success: true,
        message: `Displaying all pets`,
        payload: results,
    });
    return
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