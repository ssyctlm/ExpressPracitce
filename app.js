const express = require('express');

//initial the api app
const app = express();

app.get('/',(req,res)=>{
  res.send("<h1>Hello Express!!!</h1>")
})


const port = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`Listening Port ${port}`)})
