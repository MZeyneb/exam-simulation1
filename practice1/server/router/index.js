const express = require("express")

const {getAllData, getDataById, deleteData} = require("../controllers/index")

const router = express.Router()

router.get("/", getAllData)
router.get("/:id", getDataById)
router.delete("/:id", deleteData)


module.exports = router