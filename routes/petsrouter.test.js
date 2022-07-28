import request from "supertest";
import { describe, test, expect } from "@jest/globals";
import app from "../app.js";

describe("tests that the Pets routes, are returning all data from DB as well as response code/message; also that data on DB can be updated and created", function () {
  test("responds 200 upon request", async function () {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app).get("/pets");
    expect(response.statusCode).toEqual(200);
  });

  test("posting new data on to pets database, asserting correct response body and status code", async function () {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app).post("/pets").send({
      user_id: "3",
      pet_id: "5",
      name: "Tall Cat",
      species: true,
      breed: "Tabby",
      age: 37,
      weight: 50,
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toStrictEqual({
      success: true,
      message: "Created new pet",
      payload: [
        {
            user_id: expect.any(String),
            pet_id: expect.any(String),
            name: expect.any(String),
            species: expect.any(Boolean),
            breed: expect.any(String),
            age: expect.any(Number),
            weight: expect.any(Number),
        },
      ],
    });
  });

  test("updating pet entry on database, asserting correct response body and status code", async function () {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app).put("/pets/5").send({
      user_id: "3",
      pet_id: "5",
      name: "Short Cat",
      species: true,
      breed: "Tabby",
      age: 37,
      weight: 50,
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toStrictEqual({
      success: true,
      message: "Updated pet info",
      payload: [
        {
            user_id: expect.any(String),
            pet_id: expect.any(String),
            name: expect.any(String),
            species: expect.any(Boolean),
            breed: expect.any(String),
            age: expect.any(Number),
            weight: expect.any(Number),
        },
      ],
    });
  });
  
});  
