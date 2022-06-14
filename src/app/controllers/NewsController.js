class NewsController {
    //[GET] /news
    news(req, res) {
        //this is a method, a function
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAILS!!!');
    }
}

module.exports = new NewsController();
//module.exports: export it(xuất ra ngoài)
// new NewsController:  create an instance (tạo ra một đối tượng)
