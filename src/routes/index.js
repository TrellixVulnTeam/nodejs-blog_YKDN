const newsRouter = require('./news');
const siteRouter = require('./site'); 
function route(app){
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    

      
      // app.post('/login', (req, res)=>{
      //   console.log(req.body);
      //   res.send('login successfully');
      // })
      //request: thông tin phía client yêu cầu
      //respond: thông tin phía server trả về

      // app.get('/', (req, res)=>{
      //   console.log(req.query);//request information from search bar on browser
      //   // console.log(req.query.q);
      //   res.render('home');
      // })
}


module.exports= route;
