const Player = require('../models/playerSchema');
const objectId = require('mongoose').Types.ObjectId;

//create player controller
const createPlayer = async (req, res) => {
    const { name, country, score } = req.body;
    try {
        const player = new Player({
            name,
            country,
            score
        });
        await player.save();
        return res.status(200).json({ success: true, message: player });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//update player controller
const updatePlayer = async (req, res) => {
    //if params id is invalid
    if (!req.params.id || !objectId.isValid(req.params.id))
        return res.status(500).json({ success: false, message: "Invalid player ID" });

    try {
        const { name, score } = req.body;
        const player = await Player.findById(req.params.id);

        //if no player is found in db
        if (!player)
            return res.status(500).json({ success: false, message: "No player found" });

        player.name = name;
        player.score = score;
        await player.save();
        return res.status(200).json({ success: true, message: player });
    }

    catch (e) {
        // console.log(e);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//delete player controller
const deletePlayer = async (req, res) => {
    //if params id is invalid
    if (!req.params.id || !objectId.isValid(req.params.id))
        return res.status(500).json({ success: false, message: "Invalid player ID" });

    try {
        const player = await Player.findByIdAndDelete(req.params.id);

        //if no player is found in db
        if (!player)
            return res.status(500).json({ success: false, message: "No player found" });

        return res.status(200).json({ success: true, message: player });
    }

    catch (e) {
        // console.log(e);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//get players controller
const getPlayers = async (req, res) => {
    try {
        const player = await Player.find();

        //sorting players in descending order of their name
        player.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return -1;
            if (a.name < b.name)
                return 1;
            return 0;
        });

        return res.status(200).json({ success: true, message: player });
    }

    catch (e) {
        // console.log(e);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//get player by rank controller
const getPlayerByRank = async (req, res) => {
    //if params rank is null or negative
    if (!req.params.val || req.params.val <= 0)
        return res.status(500).json({ success: false, message: "Invalid player rank" });

    try {
        //sorting players on their score
        const player = await Player.find().sort({ 'score': -1 });

        if (req.params.val >= player.length)
            return res.status(500).json({ success: false, message: "No player found" });

        return res.status(200).json({ success: true, message: player[req.params.val - 1] });
    }

    catch (e) {
        // console.log(e);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//get random player
const getPlayerRandom = async (req, res) => {
    try {
        const player = await Player.find();
        const randomNumber = Math.floor(Math.random()*player.length);
        return res.status(200).json({ success: true, message: player[randomNumber] });
    }

    catch (e) {
        // console.log(e);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

module.exports = { createPlayer, updatePlayer, deletePlayer, getPlayers, getPlayerByRank, getPlayerRandom };