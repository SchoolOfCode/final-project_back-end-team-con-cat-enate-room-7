import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();

const app = express();
const PORT = process.env.port || 3000;


// test route

app.get("/", function (req, res) {
    res.json({
        success: true,
        message: "Test route is up and running!",
    });
});

app.use(express.json(cors, bodyParser));

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});