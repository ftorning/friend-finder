const router = require('express').Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

// define the home page route
router.get('/', function (req, res) {
    res.render('index');
});

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