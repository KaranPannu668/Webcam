
const express = require("express");
const path = require("path");
const app = express();
const Datastore = require("nedb");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const database = new Datastore('database.db');
database.loadDatabase();


app.get("/", (req,res) =>{
    res.render("webcam");
})

app.post("/", (req,res) => {
    const data = req.body;
    database.insert(data);
    res.json(data);
})


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Server has been started");
})