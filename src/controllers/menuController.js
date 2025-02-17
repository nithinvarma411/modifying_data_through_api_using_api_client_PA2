const Menu = require("../models/menuSchema.js");

const updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const updatedMenuItem = await Menu.findByIdAndUpdate(id, { name, description, price }, { new: true });
        if (!updatedMenuItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }
        res.status(200).json(updatedMenuItem);
    } catch (error) {    
        res.status(500).json({ message: error.message });
    }
};

const deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMenuItem = await Menu.findByIdAndDelete(id);
        if (!deletedMenuItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }
        res.status(200).json({ message: "Menu item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { updateMenuItem, deleteMenuItem };