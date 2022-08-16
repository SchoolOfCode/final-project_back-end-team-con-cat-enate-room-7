[<img src="./Images/Banner.png" />](image.png)

<br/>

---

<br />

## List of Contents

1. [Introduction](#Care-Full)
2. [Environment Variables](#Environment-Variables)
3. [Run Locally](#Run-Locally)
4. [Running Tests](#Running-Tests)
5. [Tech Stack](#tech-stack)
6. [API References](#api-reference)
7. [The Team](#The-Team)
8. [Appendix](#appendix)

<br/>

---

<br />

# **_Care-Full App_** 🏥🐈🐶🐇

Welcome to Care-Full!

This app was created as part of the School of Code bootcamp, a team of 6 animal lovers came together and began brainstorming what real world problem we wanted to solve. Soon we realised a common issue experienced amongst pet owners - remembering when specific symptoms began and tracking how many times a symptom has been experienced. This then led us onto talking about the difficulty of remembering when you need to administer medication and attend appointments. After lots of ideation and grand ideas, we pulled ourselves back to reality and came up with a viable product that we could plan and produce in only 4 weeks, this is the result.

Problem statement:
Having a sick pet is a stressful situation, on top of our already busy lives, this additional stress can make it difficult to remember the specific details of your pet's illness and their needs.

Solution:
This app aims to alleviate some of the stress that comes with having a sick pet by providing the user with an easy way to track symptoms and medications and facilitate better and more accurate in person communication when visiting the vets.

This repository holds the code to make API's, it runs on an Express Server, making queries to a POSTGRESQL Database. The credentials for the database will be stored in your environment variables.

The server handles requests to a database with 3 tables that allows for users to add and update pet details as well as adding symptoms and appointments.

The Care-Full website makes fetch requests to this server when running locally.

**This README is for the Back-end of the Care-Full app. If you would like to explore the Front-end of the app please go to the [Front-end repository](https://github.com/SchoolOfCode/final-project_front-end-team-con-cat-enate-room-7)**

<br/>

---

<br />

# **_Environment Variables_**

To run this project locally, you will need to add the following environment variables to your .env file

DATABASE_URL

<br/>

<br />

# **_Run Locally_** 💻

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/final-project_back-end-team-con-cat-enate-room-7.git
```

Go to the project directory

```bash
  cd final-project_back-end-team-con-cat-enate-room-7.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Copy your database (e.g. Heroku) URL into the .env file, following the format:

```bash
 DATABASE_URL = <Database URL goes here>
```

Create all tables in your database by running the following scripts in the terminal:

```bash
npm run createSymptomsTable
npm run createRemindersTable
npm run createPetsTable
```

To populate the tables you can achieve this by interacting with the front end UI here https://care-full.netlify.app. If you would like to run the front end locally, please follow the instructions in the next section.

<br/>

---

<br />

**Frontend**

The front end is deployed using netlify, however you will need to follow the steps below if you would like to run it locally.

1. Git clone the frontend repository.

```bash
  git clone https://github.com/SchoolOfCode/final-project_front-end-team-con-cat-enate-room-7
```

2. Remember to navigate to the correct folder: final-project_front-end-team-con-cat-enate-room-7

3. Install all necessary dependencies by running the following command in the terminal.

```bash
  npm i
```

4. Start the app.

```bash
  npm run dev
```

<br/>

---

<br/>

# **_Running Tests_**

To run tests, run the following command

```bash
  npm run test
```

<br />

---

<br/>

## **_Tech Stack⚙️_**

**Client:** Next.js, CSS, Chakra Component Library, Auth0
</br>
**Server:** Node, Express, PostreSQL, Nanoid
</br>
**Client-side Testing:** React Testing Library, Cypress
</br>
**Server-side Testing:** Supertest, Jest

<br/>

---

<br />

## API Reference

<br/>

### Pets Table

<br/>

#### Get all pets belonging to a user


```http
  GET /pets/${user_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Required**. User ID associated with account |

<br/>

#### Get the info of a single pet belonging to a user

```http
  GET /pets/${user_id}?pet_id=${pet_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id` | `string` | **Required**. User ID associated with account |
| `pet_id`  | `string` | **Required**. Pet ID |

<br />

#### Get the info of a single pet 

```http
  GET /pets?pet_id=${pet_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pet_id`  | `string` | **Required**. Pet ID |

<br />

#### Post the data for a new pet 

```http
  POST /pets
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing pet details |
| `user_id`  | `string`  | **Required**. ID associated with user account (Front End obtains this from Auth0)|
| `pet_id`   | `string`  | **Required**. ID associated with the pet (Front End generates this with nanoid)|
| `name`     | `string`  | **Required**. Name of Pet |
| `species`  | `boolean` | **Required**. Species of pet true is Cat, false is Dog |
| `breed`    | `string`  | Breed of Pet |
| `age`      | `Integer` | Age of Pet |
| `weight`   | `Float`   | Weight of Pet |

<br />

#### Update the data of a Pet

```http
  PUT /pets/${pet_id}
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing pet details |
| `user_id`  | `string`  | ID associated with user account (Front End obtains this from Auth0)|
| `pet_id`   | `string`  | **Required**. ID associated with the pet (Front End generates this with nanoid)|
| `name`     | `string`  | Name of Pet |
| `species`  | `boolean` | Species of pet true is Cat, false is Dog |
| `breed`    | `string`  | Breed of Pet |
| `age`      | `Integer` | Age of Pet |
| `weight`   | `Float`   | Weight of Pet |

<br />

### Symptoms Table

<br/>

#### Get all symptoms associated with a pet


```http
  GET /symptoms/${pet_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pet_id`  | `string` | **Required**. ID associated with pet |

<br/>

#### Get all incidents of a particular symptom associated with a pet

```http
  GET /symptoms/${pet_id}?symptoms_id=${symptoms_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pet_id`  | `string` | **Required**. ID associated with pet |
| `symptoms_id`  | `string` | **Required**. ID associated with a symptom entry|

<br/>

#### Post the data for a new symptom

```http
  POST /symptoms
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing symptom details |
| `user_id`  | `string`  | **Required**. ID associated with user account (Front End obtains this from Auth0)|
| `pet_id`   | `string`  | **Required**. ID associated with the pet (Front End generates this with nanoid)|
| `symptoms_id`   | `string`  | **Required**. ID associated with the symptom (Front End generates this with nanoid)|
| `incident_id`   | `string`  | **Required**. ID associated with the incident (Front End generates this with nanoid)|
| `symptoms`     | `string`  | **Required**. Title/Name of the symptom |
| `date`  | `string` | **Required**. Date that the incident occured |
| `time`    | `string`  | **Required**. Time that the incident occured |
| `description`      | `string` | **Required**. More detailed explanation of the symptom |


<br />

#### Delete a symptom and all its incidents

```http
  Delete /symptoms/${symptoms_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `symptoms_id`  | `string` | **Required**. ID associated with a symptom entry|

<br/>

### Reminders Table

<br/>

#### Get all reminders belonging to a pet


```http
  GET /reminders/pet_id=${pet_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pet_id` | `string` | **Required**. ID associated with a pet |

<br/>

#### Post the data for a new reminder

```http
  POST /reminders
```

| Parameter  | Type      | Description                                      |
| :--------  | :-------  | :-------------------------------- |
| `body`     | `JSON`    | **Required**. JSON object containing symptom details |
| `user_id`  | `string`  | **Required**. ID associated with user account (Front End obtains this from Auth0)|
| `pet_id`   | `string`  | **Required**. ID associated with the pet (Front End generates this with nanoid)|
| `reminder_id`   | `string`  | **Required**. ID associated with the reminder (Front End generates this with nanoid)|
| `task`     | `string`  | **Required**. Title/Name of the task |
| `date`  | `string` | **Required**. Date that the task needs to be completed by |
| `completed`  | `boolean` | **Required**. Whether the task has been completed (default value is false) |
| `repeated`  | `boolean` | **Required**. Whether the task is done needs to be done multiple times |
| `frequency`      | `string` | How often the task needs to be completed Suitable entries: (null, 1, 7, 30, 365)|

<br />

#### Update the completed parameter of a reminder

```http
  Patch /reminders/${reminder_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `reminder_id`  | `string` | **Required**. ID associated with a reminder entry|
| `body`     | `JSON`    | **Required**. JSON object containing symptom details |
| `completed`  | `boolean` | **Required**. Whether the task has been completed  |

<br/>

#### Delete a reminder

```http
  Delete /reminders/${reminder_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `reminder_id`  | `string` | **Required**. ID associated with a reminder entry|

<br/>
---

<br />

## **_The Team_**

We are Con-Cat-enate!

- [Christophe Charbonneau-Freeston](https://github.com/St0neofFr33dom)
- [HW Chong](https://github.com/LunaChong)
- [Jack Cherry ](https://github.com/JackC91)
- [Mohamed Ali](https://github.com/CodeNameMoe)
- [Miguel Lamas](https://github.com/MiguelLamas)
- [Rachel Alker](https://github.com/rachelalk)

<br/>

---

<br />

## **_Appendix📝_**

</br>

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nanoid](https://www.npmjs.com/package/nanoid)
- [Supertest](https://www.npmjs.com/package/supertest)
