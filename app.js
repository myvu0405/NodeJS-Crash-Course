const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRoutes = require ('./routes/blogRoutes')

const { result } = require('lodash');

const app=express();

//connect to mongodb
const dbURI='mongodb+srv://myvu01:haydoiday1@nodetuts.zqauy.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology:true})
.then((result)=> app.listen(3000))
.catch((err) => console.log(err));


//register view engine
app.set('view engine','ejs');

//using middelware to show log in the terminal
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true})); //to use all url encoded data from the form
// app.use(morgan('tiny'));

//listen to requests

// app.listen(3000);
/*
//make own middleware
app.use((req,res,next)=>{
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ',req.path);
    console.log('method: ',req.method);
    next();
});
app.use((req,res,next)=>{
    console.log('into next middelware...');
    next();
})
*/


//middelware to use static data(css, images ...)
app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.send('<p>Home page</p>');
    //res.sendFile('./views/index.html',{root: __dirname});
    /*
    const blogs=[
        {title: 'Blog no1', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odit vitae magni et doloribus itaque facere, labore quae perspiciatis. Natus quos consectetur esse dolore alias explicabo culpa perferendis minima asperiores.'},
        {title: 'Blog no2', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odit vitae magni et doloribus itaque facere, labore quae perspiciatis. Natus quos consectetur esse dolore alias explicabo culpa perferendis minima asperiores.'},
        {title: 'Blog no3', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odit vitae magni et doloribus itaque facere, labore quae perspiciatis. Natus quos consectetur esse dolore alias explicabo culpa perferendis minima asperiores.'}
    ];
    res.render('index',{title: 'Hello from EJS',blogs});
    */
    res.redirect('/blogs');
});

/*
//mongoose & mongoose sandbox route
app.get('/add-blog',(req,res) => {
    const blog =new Blog({
        title: 'Blog #02',
        snippet: 'Blog snippet #02',
        body: 'Blog body #02'
    });
    //save to db
    blog.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })
})

//get all blogs from DB
app.get('/all-blogs', (req,res) =>{
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) =>{
            console.log(err);
        })
})
//get a single blog from DB
app.get('/single-blog',(req,res) => {
    Blog.findById('61e01d03d40cf0dc0fa7f56f')
        .then((result) =>{
            res.send(result);
        })
        .catch((err) =>{
            console.log(err);
        })
})
*/

app.get('/about',(req,res)=>{
    // res.send('<p>About page</p>');
    //res.sendFile('./views/about.html',{root: __dirname});
    
    res.render('about',{title:'About'});

});


//redirection
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//blog routes
app.use('/blogs',blogRoutes);

//404 page
app.use((req,res)=>{
    //res.status(404).sendFile('./views/404page.html',{root: __dirname});
    res.status(404).render('404page',{title:'404 Page'});
})