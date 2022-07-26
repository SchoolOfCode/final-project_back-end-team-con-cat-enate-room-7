import express from 'express';
const app = express();
const PORT = process.env.port || 3000;


// test route

app.get("/", function (req, res) {
    res.json({
        success: true,
        message: "Test route is up and running!",
    });
});

app.use(express.json());
// app.use()

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});