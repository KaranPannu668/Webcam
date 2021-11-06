
const express = require("express");
const bodyParser=require("body-parser");
const path = require("path");
const app = express();
const Datastore = require("nedb");

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.set('view engine', 'ejs');
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const database = new Datastore('database.db');
database.loadDatabase();


app.get("/", (req,res) =>{
    res.render("base64");
})

app.post("/", (req,res) => {

    const img64 = req.body.Username;
    res.send(img64);



    // const data = req.body;
    // database.insert(data);
    // res.json(data);
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Server has been started");
})