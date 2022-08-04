import { query } from "../db/index.js";

export async function getAllPets(id) {
  const data = await query(`SELECT * FROM pets WHERE user_id = $1;`,[id]);
  return data.rows;
}
export async function getPet(id, params) {
  const data = await query(`SELECT * FROM pets WHERE user_id = $1 AND pet_id=$2;`,[id,params]);
  return data.rows;
}

export async function getPetNoUser(params) {
  const data = await query(`SELECT * FROM pets WHERE pet_id=$1;`,[params]);
  return data.rows;
}

export async function createNewPet(newPet) {
  const { user_id, pet_id, name, species, breed, age, weight } = newPet;
  const data = await query(
    `INSERT INTO pets (
        user_id, pet_id, name, species, breed, age, weight) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
    [user_id, pet_id, name, species, breed, age, weight]
  );

  return data.rows;
}

export async function updatePet(id, updatedPetInfo) {
    const { user_id, pet_id, name, species, breed, age, weight } = updatedPetInfo;
  const data = await query(
    `UPDATE pets SET (
        user_id, name, species, breed, age, weight) = ($1, $3, $4, $5, $6, $7) WHERE pet_id = $2 RETURNING *;`,
    [user_id, id, name, species, breed, age, weight]
  );

  return data.rows;
}