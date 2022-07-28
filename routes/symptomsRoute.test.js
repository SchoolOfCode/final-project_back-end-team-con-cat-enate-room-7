import app from "../app.js";
import { test, expect, describe } from "@jest/globals";
import supertest from "supertest";
const request = supertest(app);

describe("symptoms routes", () => {
  test("GET/all symptoms", async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const res = await request.get("/symptoms");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      success: true,
      message: `Displaying all symptom results`,
      payload: expect.any(Object),
    });
  });

  test("GET/ symptom by id", async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const res = await request.get("/symptoms/7");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      success: true,
      message: "Display user with id 7",
      payload: [
        {
          user_id: "7",
          pet_id: "1234567890",
          incident_id: "1234567890",
          symptoms: "Gammy eye",
          symptoms_id: "7",
          date: "120722",
          time: "1200",
          description: "Can't stop winking!",
        },
      ],
    });
  });

  test("POST/ symptom ", async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request.post("/symptoms").send({
      user_id: "8",
      pet_id: "1234567890",
      incident_id: "1234567890",
      symptoms: "Gammy eye",
      symptoms_id: "7",
      date: "120722",
      time: "1200",
      description: "Can't stop winking!",
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toStrictEqual({
      success: true,
      message: "Create new symptom data",
      payload: [
        {
          user_id: "8",
          pet_id: "1234567890",
          incident_id: "1234567890",
          symptoms: "Gammy eye",
          symptoms_id: "7",
          date: "120722",
          time: "1200",
          description: "Can't stop winking!",
        },
      ],
    });
  });

  test("DELETE/ symptom ", async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request.delete("/symptoms/8");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject({
      success: true,
      message: `Deleted symptom with ID 8, displaying remaining data`,
    });
  });
});
