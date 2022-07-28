import request from "supertest";
import { describe, test, expect } from "@jest/globals";
import app from "../app.js";

describe("tests that the Pets routes, are returning all data from DB as well as response code/message; also that data on DB can be updated and created", function () {
  test("responds 200 upon request", async function () {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app).get("/pets");
    expect(response.statusCode).toEqual(200);
  });

  test("posting new data on to pets database", async function () {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app).post("/pets").send({
      user_id: String,
      pet_id: String,
      name: String,
      species: Boolean,
      breed: String,
      age: Number,
      weight: Number,
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toStrictEqual({
      success: true,
      message: "Created new pet",
      payload: [
        {
          user_id: String,
          pet_id: String,
          name: String,
          species: Boolean,
          breed: String,
          age: Number,
          weight: Number,
        },
      ],
    });
  });
});
