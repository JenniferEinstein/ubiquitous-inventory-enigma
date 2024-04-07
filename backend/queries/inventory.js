const db = require('../db/dbConfig')

const getAllItems = async () => {
    const itemz = await db.any("SELECT * FROM item")
    return itemz
}

const getAnItem = async (id) => {
    const item = await db.oneOrNone("SELECT * FROM item WHERE id=$1", [id]);
    return item;
}

const createAnItem = async (body) => {
    const createdItem = await db.oneOrNone("INSERT INTO item (name, category, year_acquired, notes) VALUES ($1, $2, $3, $4) RETURNING *",[body.name, body.category, body.year_acquired, body.notes])
    return createdItem;
}

const updateAnItem = async (body, id) => {
    const updatedItem = await db.oneOrNone("UPDATE item SET name=$1, category=$2, year_acquired=$3, notes=$4 WHERE id=$5 RETURNING *",[body.name, body.category, body.year_acquired, body.notes, id])
    return updatedItem
}

const deleteAnItem = async (id) => {
    const deletedItem = await db.oneOrNone("DELETE FROM item WHERE id=$1 RETURNING *", [id])
    return deletedItem
}

// we will be exporting a bunch of functions, each of which is connected to a CRUD operation
module.exports = {
    getAllItems,
    getAnItem,
    createAnItem,
    updateAnItem,
    deleteAnItem
}