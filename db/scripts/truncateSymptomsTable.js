import { query } from "../index.js";

async function truncateSymptomsTable() {
	const res = await query(`TRUNCATE TABLE symptoms;`);
	console.log(res.command, "truncated symptoms table");
}

truncateSymptomsTable();
