const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req,res) => {
    res.render("about");
});

// Server start!
app.listen(process.env.PORT, () => {
    console.log("Server started!");
});
