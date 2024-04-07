const express = require("express")
const inventoryController = express.Router();
const {getAllItems, getAnItem, createAnItem, updateAnItem, deleteAnItem} = require("../queries/inventory")

// Now that we have queries, we not long need:  const db = require('../db/dbConfig')


function validateId(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id
    if( !Number.isInteger(Number(id)) || Number(id) < 1 ){
        //this is not a valid id
        res.status(400).send("You have given us an invalid id. It should be a positive integer")
    }
    next()
}
 
function validateBody(req, res, next){
    const body = req.body;

    if (body.name && body.category){
        next()
    } else {
        res.status(400).send("Please make sure you include a name and category")
    }
}


async function validateItemExists(req, res, next){
    const id = req.params.id
    let item = await getAnItem(id)

    if (!item) {
        res.status(400).send("We could not find the item you were looking for")
    } else {
        req.item = item;
        console.log("Item Exists")
        next()
    }
}

const inventoryItems = [
    {
        name: "Teddy Bear",
        category: "toy",
        year_acquired: 1976,
        notes: "from Grandpa Syd",
        current:"yes"
    },
    {
        name: "Honey Bear",
        category: "toy",
        year_acquired: 2015,
        notes: "from Ruben",
        current:"yes"
    },
    {
        name: "yellow bar stool",
        category: "furniture",
        year_acquired: 1997,
        notes: "none for now",
        current:"yes"
    }

];


// ===========  GET ALL ITEMS =============
/*
inventoryController.get("/", (req, res) => {
    try {
        // res.status(200)
        res.status(200).send (inventoryItems)
    } catch (error) {
        res.send(error)
    }
});   
*/

inventoryController.get("/", async (req, res) => {
    try {
        // const inventory = await db.any("SELECT * FROM item");
        const inventory = await getAllItems()
        console.log(inventory);
        res.status(200).send(inventory);
    } catch (error) {
        console.error("Error fetching inventory:", error);
        res.status(500).send("Internal Server Error");
    }
})

// ===========  GET SINGLE ITEM =============
/*
inventoryController.get("/:id", (req, res) => {
    const id = req.params.id
    if (id < inventoryItems.length && id >= 0){
        res.send(inventoryItems[id])
        res.status(200)
    } else {
        res.send ("This does not exist in our database")
    }
});
*/
inventoryController.get("/:id", validateId, validateItemExists, async (req, res) => {
    // const id = req.params.id;
    
    // Replaced with queries: const singleItem = await db.oneOrNone("SELECT * FROM item WHERE id=$1", [id]);
    
    console.log(singleItem);
    try {
        const singleItem = req.item;
        res.status(200).send(singleItem);
    } catch (error) {
        res.status(500).send(error);
    }

});

// ===========  MAKE NEW ITEM =============
   // this does not have to say /new, but you can do that for clarity
inventoryController.post('/new', validateBody, async (req, res) => {
    console.log(req.body);
    const body = req.body;
    
    try {
        const singleItem = await createAnItem(body)
        res.status(201).send(singleItem)
    } catch (error) {
        res.status(500).send(error)
    }
})

// ===========  CHANGE/UPDATE ITEM =============
inventoryController.put('/:id', validateId, validateBody, validateItemExists, async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const itemToChange = req.item

    try{
        const updatedItem = await updateAnItem(body, id)
        res.send(updatedItem)
    } catch(error) {
        res.status(500).send(error)
    }
})

/*
    inventoryController.put('/:id', (req, res) => {
        const id = req.params.id;
        const body = req.body;

        if (fellows[id]) {
            if (body.name && body.category){
                inventoryItems[id] = {name: body.name, category: body.category}
                res.send(inventoryItems)
            } else {
                res.send("Please include a name and category")
            }
        } else {
            res.send("no inventory item with that id exists")
        }
    })
*/

// ===========  DELETE ITEM =============

inventoryController.delete('/:id', validateId, validateItemExists, async(req, res) => {
    const id = req.params.id;

    try{
        let deletedItem = await deleteAnItem(id)
        res.status(200).send(deletedItem)
    } catch(error) {
        res.status(500).send(error)
    }

    //const itemToDelete = await db.oneOrNone("DELETE FROM item WHERE id=$1",[id]);
    

    console.log(`id ${id} has been deleted`)
});



module.exports = inventoryController;