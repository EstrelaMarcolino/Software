const express = require('express')
const router = express.Router()
const Agencia = require("../models/Agencia")

router.post("/", async (req, res) => {
    try {
        const newAAgencia = new Agencia(req.body);

        const createAAgencia = await newAAgencia.save();
        res.status(200).json(createAAgencia);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get("/", async (req, res) => {
    try {
        const getAAgencia = await Agencia.find()
        res.status(200).json(getAAgencia);
    } catch (error) {
        return res.status(404).json(err);
    }
})
router.get("/:id", async (req, res) => {
    try {
        const getOneAgencia = await Agencia.findById(req.params.id)
        res.status(200).json(getOneAgencia);
    } catch (error) {
        return res.status(404).json(err);
    }
})
router.put("/:id", async (req, res) => {
    try {
        const updateAgencia = await Agencia.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updateAgencia);
    } catch (error) {
        return res.status(404).json(err);
    }
})
router.delete("/:id", async (req, res) => {
    try {
        await Agencia.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com Sucesso!");
    } catch (error) {
        return res.status(404).json(err);
    }
})

module.exports = router;