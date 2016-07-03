var Paziente = require('../models/pazienti-model.js');

module.exports = function(app) {

    /* Create */
    // app.post('/cat', function (req, res) {
    //     var newCat = new Cat(req.body);
    //     newCat.save(function(err) {
    //         if (err) {
    //             res.json({info: 'error during cat create', error: err});
    //         };
    //         res.json({info: 'cat created successfully'});
    //     });
    // });

    /* Read */
    app.get('/pazienti', function (req, res) {

        //var items;

        Paziente.findAll(function(err, all) {
            if (err) {
                res.json({info: 'error during find pazienti', error: err});
                return;
            };

            res.json({info: 'pazienti found successfully', data: all});
        });       


        //console.log('pazienti '+items.length);
        var err = false;

       
    });
}