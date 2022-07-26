import { query } from "../index.js";

async function truncatePetsTable() {
	const res = await query(`TRUNCATE TABLE pets;`);
	console.log(res.command, "truncated pets table");
}

truncatePetsTable();
