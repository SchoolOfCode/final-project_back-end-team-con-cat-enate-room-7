import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
import symptomsRouter from './routes/symptomsRouter.js';

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/symptoms", symptomsRouter);

app.get("/", function (req, res) {
    res.json({
        success: true,
        message: "Test route is up and running!",
    });
});

app.use(function (req, res, next) {
	res
		.status(404)
		.json({ message: "We couldn't find what you were looking for 😞" });
});


// test route



app.use(express.json(cors, bodyParser));

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).json(err);
});

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});

export default app;