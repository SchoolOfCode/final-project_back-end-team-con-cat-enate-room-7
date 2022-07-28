import app from "../app";
import request from "supertest";
import {pool} from "../db/index.js";
import {test, expect, describe} from '@jest/globals'


describe("Tests for the Reminders Router", ()=>{

    // afterAll(async () => {
    //     await pool.end();
    //   });

    test("Testing the Get route", async() => {
        //await new Promise((resolve) => setTimeout(() => resolve(), 2000));
        const response = await request(app).get("/reminders");
        console.log(response.body)
        expect(response.statusCode).toEqual(200)
    })
    // it('responds with json', function(done) {
    //     request(app)
    //       .get('/user')
    //       .set('Accept', 'application/json')
    //       .expect('Content-Type', /json/)
    //       .expect(200, done);
    //   });
})