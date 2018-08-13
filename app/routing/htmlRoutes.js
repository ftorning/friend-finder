const router = require('express').Router();
// var connection = require('../data/connection');
const friend = require("../data/friends");

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

// define the home page route
router.route('/survey')
    .get((req, res) => {
        res.render('survey');
    })
    .post((req, res) => {
        var username = req.body.username;
        var photourl = req.body.photourl;
        var answers = [];
        answers.push(parseInt(req.body.q1));
        answers.push(parseInt(req.body.q2));
        answers.push(parseInt(req.body.q3));
        answers.push(parseInt(req.body.q4));
        answers.push(parseInt(req.body.q5));
        answers.push(parseInt(req.body.q6));
        var new_friend = new friend.Friend(username, photourl, answers);
        var match = friend.friendMatch(new_friend);
        new_friend.addFriend()
        

        console.log(friend.friend_list);
        res.render('results', {match: match});
    })

router.route("/results")
    .get((req, res) => {
        console.log(req);
        console.log(res);
        res.send(match);
    })

router.get('*', (req, res) => {
    return res.redirect('/survey');
});



module.exports = router;