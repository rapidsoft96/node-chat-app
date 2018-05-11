var socket = io();
socket.on('connect',function(){
  console.log('Connected to server');

  socket.emit('createMessage',{
    from:'maksim',
    text: 'sta da vam kazem :D'
  });
});

socket.on('disconnect',function(){
  console.log('Disconnected from server');
});


socket.on('newMessage',function(message){
  console.log('new message',message);
});
