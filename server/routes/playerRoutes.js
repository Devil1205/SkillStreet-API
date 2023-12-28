const express = require('express');
const { createPlayer, updatePlayer, deletePlayer, getPlayers, getPlayerByRank, getPlayerRandom } = require('../controllers/playerController');
const { createPlayerValidation, updatePlayerValidation } = require('../middlewares/validation/playerValidation');
const router = express.Router();

//create player route
router.post("/players",createPlayerValidation.errors,createPlayerValidation.validate,createPlayer);

//update player route
router.put("/players/:id",updatePlayerValidation.errors,updatePlayerValidation.validate,updatePlayer);

//delete player route
router.delete("/players/:id",deletePlayer);

//get all players route
router.get("/players",getPlayers);

//get player by rank route
router.get("/players/rank/:val",getPlayerByRank);

//get random player route
router.get("/players/random",getPlayerRandom);

module.exports = router;