import { query } from "../db/index.js";

export async function getAllSymptoms() {
	const data = await query(`SELECT * FROM symptoms;`);
	return data.rows;
}

export async function getSymptomsByUserId(id) {
	const data = await query(`SELECT * FROM symptoms WHERE user_id = '${id}'`);

	return data.rows;
}

export async function createNewSymptom(newSymptom) {
	const {
		user_id,
		pet_id,
		incident_id,
		symptoms,
		symptoms_id,
		date,
		time,
		description,
	} = newSymptom;
	const data = await query(
		`INSERT INTO symptoms (user_id, pet_id, incident_id, symptoms, symptoms_id, date, time, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
		[
			user_id,
			pet_id,
			incident_id,
			symptoms,
			symptoms_id,
			date,
			time,
			description,
		]
	);
	// const result = await query(`SELECT * FROM symptoms;`);
	return data.rows;
}

export async function deleteSymptomByID(id) {
	await query(`DELETE FROM symptoms WHERE symptoms_id = '${id}'`);
	const data = await query(`SELECT * FROM symptoms;`);
	return data.rows;
}
