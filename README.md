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
6. [The Team](#The-Team)
7. [Appendix](#appendix)

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
