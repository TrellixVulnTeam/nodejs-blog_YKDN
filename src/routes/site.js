const express = require('express');
const router = express.Router();//Use route() to avoid duplicate route naming and thus typing errors.


const siteController= require('../app/controllers/SiteController');

//if it's a name of a function or class, write 'NewsController'
//otherwise, write newsController, because the letter n
// doesn't need to be capitaled 

router.get('/', siteController.home);

router.get('/login', siteController.login);


module.exports = router;





