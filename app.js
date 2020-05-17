const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require("./Members");
const logger = require("./Middleware/logger");



//* Json states //Moved to a separated file
// const members = [
//   {
//     id:1,
//     name:'Jhon Doe',
//     email:'Jhon@gmial.com',
//     status:'active'
//   },
//   {
//     id:2,
//     name:'Bob Williams',
//     email:'Bob@gmial.com',
//     status:'inactive'
//   },
//   {
//     id:3,
//     name:'Shannon Jackson',
//     email:'Shannon@gmial.com',
//     status:'active'
//   }
// ]


//* initial the api app
const app = express();

//* MiddleWare function  //moved to a separated file(module)
// const logger = (req,res,next)=>{
//   // console.log('hello');
//   console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);

//   next();
// }

//* Initial middleware
// app.use(logger)

// app.get('/',(req,res)=>{
//   //* directly send some stuff to the browser.
//     // res.send("<h1>Hello Express!!!</h1>") 
//   //* send a file as respond.
//   res.sendFile(path.join(__dirname,'public','index.html'))
// })


//* middleware body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//* middleware express handlebars

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

//* express handlebars Homepage Route
app.get('/',(req,res)=>res.render('index',{title:'Member APP',members}))

//* Set a static folder
app.use(express.static(path.join(__dirname,'public')))


//* Create router   //all router were moved to related structures (./routes/api)
//* Get All members
// app.get('/api/members',(req,res)=>{
//   res.json(members)
// })

// //* Get single member
//   // obtain request parameters  `req.params.id`
// app.get('/api/members/:id',(req,res)=>{
//   const check = members.some(member=> member.id === parseInt(req.params.id));
//   // console.log(check)
//   if(check){

//     res.json(members.filter(member=>member.id === parseInt(req.params.id)))
//   }else{
//     res.status (400).json({
//       message:`this member with id of ${req.params.id} doesn't exist`
//     })
//   }
// })

//! routers from modules //Members API Routers
app.use('/api/members',require('./routes/api/members'))

const port = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`Listening Port ${port}`)})
