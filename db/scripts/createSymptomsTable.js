import pg from "pg";

import {query} from "../index.js";

import { nanoid } from 'nanoid'
const id = nanoid(10)

const sqlString = `CREATE TABLE IF NOT EXISTS symptoms (user_id VARCHAR(10), pet_id VARCHAR(10), incident_id VARCHAR(10), symptoms TEXT, symptoms_id VARCHAR(10), date TEXT, time TEXT, desctiption TEXT);`;

async function createSymptomsTable() {
    const res = await query(sqlString);
    console.log(await res.command);
}

createSymptomsTable();