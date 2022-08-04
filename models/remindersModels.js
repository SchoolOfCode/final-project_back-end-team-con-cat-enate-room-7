import { query } from "../db/index.js";

export async function getAllReminders() {
  const data = await query(`SELECT * FROM reminders;`);
  return data.rows;
}

export async function getPetReminders(id) {
  const data = await query(`SELECT * FROM reminders WHERE pet_id=$1;`,[id]);
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

export async function updateReminder(id, updatedReminder) {
  const { completed } = updatedReminder;
  const data = await query(
    `UPDATE reminders SET completed = $1 WHERE reminder_id = $2 RETURNING *;`,
    [completed, id]
  );
  return data.rows
}


export async function deleteReminderById(id) {
  const data = await query (`DELETE FROM reminders WHERE reminder_id = $1 RETURNING *;`, 
  [id]
);
return data.rows
}

