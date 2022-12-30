const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT;

const TodoItemRoute = require("./routes/todoItems")
app.use(`/`, TodoItemRoute);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true })
.then(() => {

    // connect to DB before listening to request.
    app.listen(PORT, () =>{
        console.log(PORT,`Server is listening on ${PORT}`)
    })
    console.log("Database connected")
})
.catch(err => console.log("err"));


