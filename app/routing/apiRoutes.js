const router = require('express').Router();
const friend = require("../data/friends");

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

// define the home page route
router.get('/', function (req, res) {
    res.json(friend.friend_list)
});

module.exports = router;