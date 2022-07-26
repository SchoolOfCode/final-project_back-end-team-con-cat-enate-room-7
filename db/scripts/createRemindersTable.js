import pg from "pg";

import { query } from "../index.js";


const sqlString = `CREATE TABLE IF NOT EXISTS reminders (user_id VARCHAR(10), pet_id VARCHAR(10), reminder_id VARCHAR(10), task TEXT, date TEXT, completed BOOLEAN, repeated BOOLEAN, frequency VARCHAR(100));`;

async function createRemindersTable() {
	const res = await query(sqlString);
	console.log(await res.command);
}

createRemindersTable();
