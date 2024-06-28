const Album = require("../models/Album")
const express = require('express')
const router = express.Router()
// const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
    try {
        const newAlbum = new Album(req.body);

        const createAlbum = await newAlbum.save();
        res.status(200).json(createAlbum);
    } catch (err) {
        res.status(500).json(err);
    }

});


router.get("/", async (req, res) => {
    try {
        const getAlbums = await Album.find()
        res.status(200).json(getAlbums);
    } catch (error) {
        return res.status(404).json(err);
    }
})
router.get("/:id", async (req, res) => {
    try {
        const getOneAlbum = await Album.findById(req.params.id)
        res.status(200).json(getOneAlbum);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.put("/:id", async (req, res) => {
    try {
        const updateAlbum = await Album.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updateAlbum);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.delete("/:id", async (req, res) => {
    try {
        await Album.findByIdAndDelete(req.params.id)
        res.status(200).json("Deletado com Sucesso!");
    } catch (error) {
        return res.status(404).json(err);
    }

})

module.exports = router;