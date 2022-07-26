import { query } from "../db/index.js";

export async function getSymptomsByUserId(id) {
  const data = await query(`SELECT * FROM symptoms WHERE user_id = ${id}`);

  return data.rows;
}

export async function createNewSymptom(newSymptom) {
  const { user_id, pet_id, incident_id, symptoms, symptoms_id, date, time, description } = newSymptom;
  const data = await query(
    `INSERT INTO public.symptoms (user_id, pet_id, incident_id, symptoms, symptoms_id, date, time, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    [user_id, pet_id, incident_id, symptoms, symptoms_id, date, time, description]
  );
  return data.rows;
}
