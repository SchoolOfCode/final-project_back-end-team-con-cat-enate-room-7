import { query } from "../db/index.js";

export async function getAllReminders() {
  const data = await query(`SELECT * FROM reminders;`);
  return data.rows;
}

export async function createNewReminder(newReminder) {
  const {
    user_id,
    pet_id,
    reminder_id,
    task,
    date,
    completed,
    repeated,
    frequency,
  } = newReminder;
  const data = await query(
    `INSERT INTO reminders (
        user_id,
		pet_id,
        reminder_id,
        task,
        date,
        completed,
        repeated,
        frequency) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    [user_id, pet_id, reminder_id, task, date, completed, repeated, frequency]
  );

  return data.rows;
}
