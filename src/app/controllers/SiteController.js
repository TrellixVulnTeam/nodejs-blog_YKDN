class SiteController {
    //[GET] /
    home(req, res) {
        res.render('home');
    }

    //[GET] /
    login(req, res) {
        res.render('login');
    }
}

module.exports = new SiteController();
