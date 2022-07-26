import { query } from "../index.js";

async function truncateRemindersTable() {
	const res = await query(`TRUNCATE TABLE reminders;`);
	console.log(res.command, "truncated reminders table");
}

truncateRemindersTable();
