// separate file to keep app.js clean
var express = require('express'),
  db = require('../models') // automatically requires models/index.js
  router = express.Router();

router.get('/', (req, res) => {
  db.Settings.findOne({})
  .then( function(result) {
    res.render('home', {settings: result});
  })
});

router.get('/details', (req, res) => {
	res.render('details');
});

router.post('/set-color', (req,res) => {
  db.Settings.findOne({})
  .then( function(result) {
    var settings = {
      'lightColor': req.body.color,
      'lightIsOn': true
    }

    if (req.body.options) {
      if (req.body.options.setAsDefault) {
        settings['defaultColor'] = req.body.color;
      } else if (req.body.options.changeToDefault) {
        settings['lightColor'] = result['defaultColor']; // replace w/ call to database later
      } else if (req.body.options.turnOff || req.body.color == '000000') {
        settings['lightColor'] = '000000';
        settings['lightIsOn'] = false;
      }
    }

    return db.Settings.findOneAndUpdate({}, settings, {'new': true, upsert: true})
    // new=true makes it print out the new udpated database
    // upsert=true makes it create the document if it doesnt exist
  })
  .then( function(edited) {
    console.log(edited);
    res.redirect('/');
  })
  .catch( function(err) {
    res.send(err);
  });
});

router.post('/set-config', (req,res) => {
  db.Settings.findOne({})
  .then( function(result) {
    var settings = { }

    if (req.body.config.hot) {
      settings['hot'] = req.body.config.hot;
    }
    if (req.body.config.cold) {
      settings['cold'] = req.body.config.cold;
    }
    if (req.body.config.humid) {
      settings['humid'] = req.body.config.humid;
    }
    if (req.body.config.dry) {
      settings['dry'] = req.body.config.dry;
    }
    if (req.body.config.dark) {
      settings['dark'] = req.body.config.dark;
    }

    return db.Settings.findOneAndUpdate({}, settings, {'new': true, upsert: true})
  })
  .then( function(edited) {
    console.log(edited);
    res.redirect('/');
  })
  .catch( function(err) {
    res.send(err);
  });
});

// let app.js use this
module.exports = router;
