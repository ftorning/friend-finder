const router = require('express').Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

// define the home page route
router.get('/', (req, res) => {
    res.render('index');
});

router.route('/add-question')
    .get((req, res) => {
        res.render('add-question');
    })
    .post((req, res) => {
        var data = req.body;
        res.send(data);
        // connection.query("SELECT * FROM ")
    })

// // Root get route.
// app.get("/", function(req, res) {
// //   connection.query("SELECT * FROM wishes;", function(err, data) {
// //     if (err) {
// //       throw err;
// //     }

//     // Test it.
//     // console.log('The solution is: ', data);

//     // Test it.
//     // res.send(data);

//     res.render("index");
// //   });
// });

module.exports = router;