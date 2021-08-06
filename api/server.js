const countries = require("./countriesData.json");
const express = require("express");
const app = express();
const cors = require("cors") 
const port = 8000;

app.use(cors())

app.get("/", (req, res) => {
    res.send(countries);
});

app.get("/all", (req, res) => {
    let countriesNames = [];
    for (let i = 0; i < countries.length; i++) {
        countriesNames.push(countries[i].name);
    }
    res.send(countriesNames);
});

app.listen(port, () => {
    console.log(`The server started on port: ${port}`);
});