const express = require("express");
const server = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

server.use(express.json());






mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to Database")
}).catch((err) => {
    console.log("error connecting to Database", err);
})


const port = process.env.PORT
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});