const {updatedMenuItem, deleteMenuItem} = require("../controllers/menuController.js");
const express = require("express");

const router = express.Router();

router.put("/menu/:id", updatedMenuItem);
router.delete("/menu/:id", deleteMenuItem);