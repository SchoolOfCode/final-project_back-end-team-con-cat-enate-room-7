import app from "../app";
import supertest from "supertest";
import { pool } from "../db/index.js";
import { test, expect, describe } from "@jest/globals";

const request = supertest(app);

describe("Tests for the Reminders Router", () => {
  afterAll(async () => {
    await pool.end();
  });

  test("Testing the Get route", async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request.get("/reminders").set("Accept", "application/json");
    expect(response.statusCode).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Testing the Post route", async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request.post("/reminders")
      .send({
        user_id: '3',
        pet_id: '134',
        reminder_id: '39',
        task: 'Go to vet',
        date: '27/09/2022',
        completed: false,
        repeated: true,
        frequency: 'monthly'
      })
      .set("Accept", "application/json");
    expect(response.statusCode).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Test the Patch Route", async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request.patch("/reminders/39")
    .send({completed:true})
    expect(response.statusCode).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    const completed = response.body.payload[0].completed
    expect(completed).toBe(true)
})

    test("Testing the Delete Route", async () => {
        await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request.delete("/reminders/39")
    expect(response.statusCode).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toStrictEqual({
        "success": true,
        "message": "Deleted reminder with id 39",
        "payload": [
            {
                "user_id": "3",
                "pet_id": "134",
                "reminder_id": "39",
                "task": "Go to vet",
                "date": "27/09/2022",
                "completed": true,
                "repeated": true,
                "frequency": "monthly"
            }]})
    })
})
