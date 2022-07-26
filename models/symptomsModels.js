import { query } from "../db/index.js";

export async function getSymptomsByUserId(id) {
  const data = await query(`SELECT * FROM symptoms WHERE user_id = ${id}`);

  return data.rows;
}
