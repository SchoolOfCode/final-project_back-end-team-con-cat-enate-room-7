import { query } from "../index.js";

async function dropSymptomsTable() {
	const res = await query(`DROP TABLE IF EXISTS symptoms;`);
	console.log(res.command, "dropped symptoms table");
}

dropSymptomsTable();
