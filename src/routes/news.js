const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//if it's a name of a function or class, write 'NewsController'
//otherwise, write newsController, because the letter n
// doesn't need to be capitaled

router.get('/:slug', newsController.show);
router.get('/', newsController.news);

module.exports = router;
