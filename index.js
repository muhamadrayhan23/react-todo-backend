const express = require('express');

const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes.js");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/todo", todoRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});