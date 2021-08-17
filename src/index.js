import express from 'express';
import expressHandlebars from 'express-handlebars';
import path from 'path';
import rootRoutes from './routes';
// khởi tạo express
const app = express();
const PORT = 4000 || process.env.PORT;
// cấu hình handlebars
const hbs = expressHandlebars.create({
    extname : '.hbs',
    defaultLayout : 'sitelayout',
    layoutsDir : path.join(__dirname,'app/views/layouts'),
    partialsDir : path.join(__dirname,'app/views/components')
});


//middleware
// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'../public')));
// init template engine gán module hbs = hbs.create
app.engine('hbs',hbs.engine);
// set views folder
app.set('views',path.join(__dirname,'app/views/pages'));
// set view engine
app.set('view engine','hbs');

// init route
rootRoutes(app)

// start server
app.listen(PORT,() => {
    console.log('connect successfully!');
})

