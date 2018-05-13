var socket = io();
socket.on('connect',function(){
  console.log('Connected to server');
});

socket.on('disconnect',function(){
  console.log('Disconnected from server');
});


socket.on('newMessage',function(message){
  console.log('new message',message);
  // var from=message.from;
  // var text=message.text;
  // document.querySelector('#taMessages').value+=from+":"+text+"\n";
  var li=jQuery('<li></li>');
  li.text(`${message.from}:${message.text}`);
  jQuery('#messages').append(li);
});

socket.on('newLocationMessage',function(message){
  //moj nacin:
  // var li=jQuery(`<a href=${message.url} target="_blank"><li></li></a>`);
  // li.text(`${message.from}: click for my location`);
  // jQuery('#messages').append(li);
  //njegov nacin sa jQuery , sigurniji:
  var li= jQuery('<li></li>');
  var a =jQuery('<a target="_blank">my current location</a>');
  li.text(`${message.from}: `);
  a.attr('href',message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit',function(e){
  e.preventDefault();
  socket.emit('createMessage',{
    from:'User',
    text:jQuery('[name=message]').val()
  },function(){

  });
});

var locationButton=jQuery('#send-location');
locationButton.on('click',function(){
  if (!navigator.geolocation){
    return alert('Geolocation not supported by your browser');
  }

  navigator.geolocation.getCurrentPosition(function(position){
    //console.log(position);
    socket.emit('createLocationMessage',{
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    });
  },function(){
    alert('Unable to fetch location.');
  });
});
