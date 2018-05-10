const path=require('path'); //built in module
const express=require('express');
const port=process.env.PORT || 3000;
const publicPath= path.join(__dirname, '../public')
//join - sluzi za spajanje putanje , kako bi iz servera lako dosli u public, zbog middleware-a koji je komplikovaniji

var app=express();

app.use(express.static(publicPath));

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});
