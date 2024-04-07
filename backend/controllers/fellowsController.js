const express = require("express");
const fellowsController = express.Router();

const db = require('../db/dbConfig')

const fellows = [
    {
        name: "Jennifer Einstein",
        lastCohort: "9.6",
        looper: true,
        capstone: {
            completed: true,
            date: "01/18/2024",
            appName: "Happiness Exchange"
        },
        gender: "f",
        tags:["9.4", "9.6", "looper", "capstone", "NW", "Review and Strengthen"],
        location: "Forest Hills, Queens, NY",
        notes: "No notes at this time."
    },
    {
        name: "Hillary Brito",
        lastCohort: "9.5",
        looper: false,
        capstone: {
            completed: true,
            date: "01/17/2024",
            appName: "Game Seeker"
        },
        gender: "f",
        tags:["9.5", "capstone", "days", "Review and Strengthen"],
        location: "TX",
        notes: "No notes at this time."
    },
    {
        name: "Irfan Hanjra",
        lastCohort: "9.5",
        looper: true,
        capstone: {
            completed: true,
            date: "01/18/2024",
            appName: "Game Seeker"
        },
        gender: "m",
        tags:["9.5", "capstone", "NW"],
        notes: "No notes at this time."
    }
]


// ===========  GET ALL ITEMS =============

fellowsController.get("/", async (req, res) => {
    try {
        const fellows = await db.any("SELECT * FROM fellow")
        console.log(fellows)
        res.status(200).send(fellows);
    } catch (error) {
        console.error("Error fetching fellows:", error)
        res.status(500).send("Internal Server Error")
    }
})


/* previous example code
    fellowsController.get("/", (req, res) => {
        try {
            res.status(200);
            res.send(fellows)
        } catch (error) {
            res.send(error)
        }
    })
*/

// ===========  GET A SPECIFIC ITEM (READ) =============

fellowsController.get("/:id", async (req, res) => {
    const id = req.params.id

    const person = await db.oneOrNone("", [])

    if (id < fellows.length && id >= 0){
        res.send(fellows[id])
    } else {
        res.send ("This does not exist in our database")
    }
});



/*
fellowsController.get("/:id", (req, res) => {
    const id = req.params.id
    if (id < fellows.length && id >= 0){
        res.send(fellows[id])
    } else {
        res.send ("This does not exist in our database")
    }
});
*/

// ===========  CREATE AN ITEM =============

fellowsController.post('/new', (req, res) => {
    console.log(req.body);
    const body = req.body;

    if (body.name && body.lastCohort) {
        fellows.push({name: body.name, lastCohort: body.lastCohort});
        res.status(200);
        res.send(fellows);
    } else {
        res.send("Please make sure you include a name and a cohort")
    }
})


/*
fellowsController.post('/new', (req, res) => {
    console.log(req.body);
    const body = req.body;

    if (body.name && body.lastCohort) {
        fellows.push({name: body.name, lastCohort: body.lastCohort});
        res.status(400);
        res.send(fellows);
    } else {
        res.send("Please make sure you include a name and a cohort")
    }
})
*/


// ===========  UPDATE/CHANGE AN ITEM =============
/*
fellowsController.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    if (fellows[id]) {
        if (body.name && body.lastCohort){
            fellows[id] = {name: body.name, lastCohort: body.lastCohort}
            res.send(fellows)
        } else {
            res.send("Please include a name and cohort")
        }
    } else {
        res.send("a fellow with that id does not exist")
    }
})
*/

fellowsController.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const fellow = await db.oneOrNone("SELECT * FROM fellow WHERE id=$1", [])
    if (fellow) {
        if (body.name && body.lastCohort){
            const fellow = await db.oneOrNone("UPDATE fellow SET name=$1, lastCohort=$2 WHERE id=$3  RETURNING *",[body.name && body.lastCohort]);
            fellows[id] = {name: body.name, lastCohort: body.lastCohort}
            res.send(fellow)
        } else {
            res.send("Please include a name and cohort")
        }
    } else {
        res.send("a fellow with that id does not exist")
    }
})




// ===========  DELETE AN ITEM =============

/*
fellowsController.delete('/:id', (req, res) => {
    const id = req.params.id;
    fellows.splice(id, 1)
    res.send(fellows)
    console.log(`id ${id} has been deleted`)
})
*/

fellowsController.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const fellow = await db.oneOrNone("SELECT * FROM fellow WHERE id=$1 RETURN *", [id])


    if(fellow){
        let deletedFellow = await db.oneOrNone("DELETE FROM fellow WHERE id=$1 RETURNING *", [])
    }

    res.send(fellows)
    console.log(`id ${id} has been deleted`)
})



module.exports = fellowsController;