const express = require ("express");
const { homedir } = require("os");
const app = express ();

const path = require("path");

app.use (express.static ("public"));

app.get (
    "/",
    (req, res) => {
    res.sendFile (path.resolve ("./views/home.html"));
});

app.listen(3000, () => {
    console.log('App listening on port http://localhost:3000/');
});