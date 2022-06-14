                            const express = require('express'); //declare express
                            const morgan = require('morgan'); //declare morgan
                            const handlebars = require('express-handlebars'); //declare template engine(handlebars)
            const path = require('path'); //declare path

                    const app = express();
                                const port = 3000;
                                const route = require('./routes');

                    app.use(express.static(path.join(__dirname, 'public'))); //create path for usage

                                app.use(
                                            express.urlencoded({
                                    //process information posted from HTML form
                                    extended: true,
                                }),
                            );
                            app.use(express.json()); //process information posted from javascript codes

                    //====================HTTP logger================================== for querying any action from clients
                    app.use(morgan('combined'));

            //====================template engine(handlebars)================== for rendering templates
            app.engine(
                                'hbs',
                                handlebars.engine({
                                    extname: '.hbs',
                                }),
                );
                app.set('view engine', 'hbs');
                app.set('views', path.join(__dirname, 'resources/views')); //path to the views folder
                // console.log('PATH: ', path.join(__dirname, 'resources', 'views')) //-> this way of declaration is better because we can apply it on any OS

                //==========================routes init==================================

                            route(app);

                // app.get('/', (req, res)=>{
//   console.log(req.query);//request information from search bar on browser
//   // console.log(req.query.q);
//   res.render('home');
// })
// //request: thông tin phía client yêu cầu
// //respond: thông tin phía server trả về
// app.get('/login', (req, res)=>{
//   res.render('login');
// })

// app.post('/login', (req, res)=>{
//   console.log(req.body);
//   res.send('login successfully');
// })

                    app.listen(port, () => {
                        console.log(`Example app listening on port ${port}`);
                    });
