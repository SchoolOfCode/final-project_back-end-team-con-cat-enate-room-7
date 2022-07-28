import { query } from "../index.js";

async function dropRemindersTable() {
	const res = await query(`DROP TABLE IF EXISTS reminders;`);
	console.log(res.command, "dropped reminders table");
}

dropRemindersTable();
