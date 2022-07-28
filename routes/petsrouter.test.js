import request from "supertest";
import { describe, test, expect } from "@jest/globals";
import app from "../app.js"

describe('get request from pets route, returning all data from DB and response code/message', function() {
    test('responds 200 upon request', async function() {
        await new Promise((resolve) => setTimeout(() => resolve(), 2000));
      const response = await request(app).get('/pets')
      expect(response.statusCode).toEqual(200);
    });
  });