import pg from "pg";

import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS pets (user_id VARCHAR(10), pet_id VARCHAR(10), name TEXT, species BOOLEAN, breed TEXT, age INT, weight FLOAT);`;

async function createPetsTable() {
	const res = await query(sqlString);
	console.log(await res.command);
}

createPetsTable();
