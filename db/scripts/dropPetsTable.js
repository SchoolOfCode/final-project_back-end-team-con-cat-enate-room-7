import { query } from "../index.js";

async function dropPetsTable() {
	const res = await query(`DROP TABLE IF EXISTS pets;`);
	console.log(res.command, "dropped pets table");
}

dropPetsTable();
