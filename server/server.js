const path=require('path'); //built in module
const express=require('express');
const socketIO=require('socket.io');
const http = require('http');
const port=process.env.PORT || 3000;
const publicPath= path.join(__dirname, '../public')
//join - sluzi za spajanje putanje , kako bi iz servera lako dosli u public, zbog middleware-a koji je komplikovaniji

var app=express();
var server=http.createServer(app);
var io=socketIO(server); //communicating


app.use(express.static(publicPath));
io.on('connection',(socket)=>{ //individual socket, client
  console.log('New user connected');

  socket.emit('newEmail',{
    from:'mike@example.com',
    text: 'Hey,you suck',
    createAt: 123
  }); //creating event

  socket.emit('newMessage',{
    from:'Zlatko',
    text: 'jebo te led',
    createdAt: 123
  })
  
  socket.on('createMessage',(newMessage)=>{
    console.log(newMessage);
  });

  socket.on('disconnect',()=>{
    console.log('Client disconnected');
  });
});
server.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});
