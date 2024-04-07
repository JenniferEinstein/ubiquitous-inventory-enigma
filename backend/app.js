const express = require('express');
const fellowsController = require('./controllers/fellowsController');
const inventoryController = require("./controllers/inventoryController")
const cors = require('cors')
const app = express();


/* We COULD put all our routes in here, but it gets cumbersome, so we move them to their own 
constrollers and then make the variable here as above.
*/

// ========================

app.use(express.json());
app.use(cors())
app.use("/fellows", fellowsController);
app.use("/inventory", inventoryController);


// ========================

app.get("/", (req, res) => {
    res.send("Welcome to the inventorium!")
});

app.get("*", (req, res) => {
    res.send("The page you are looking for does not exist")
});

module.exports = app;
