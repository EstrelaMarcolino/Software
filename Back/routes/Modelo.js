const express = require('express')
const router = express.Router()
const Modelo = require("../models/Modelo")

router.post("/", async (req, res) => {
    try {
        const neWModelo = new Modelo(req.body);

        const createModelo = await neWModelo.save();
        res.status(200).json(createModelo);
    } catch (err) {
        res.status(500).json(err);
    }

});


router.get("/", async (req, res) => {
    try {
        const getModelo = await Modelo.find()
        res.status(200).json(getModelo);
    } catch (error) {
        return res.status(404).json(err);
    }
})
router.get("/:id", async (req, res) => {
    try {
        const getOneModelo = await Modelo.findById(req.params.id)
        res.status(200).json(getOneModelo);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.put("/:id", async (req, res) => {
    try {
        const updateModelo = await Modelo.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updateModelo);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.delete("/:id", async (req, res) => {
    try {
        await Modelo.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com Sucesso!");
    } catch (error) {
        return res.status(404).json(err);
    }

})

module.exports = router;