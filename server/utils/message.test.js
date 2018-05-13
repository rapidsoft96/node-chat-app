var expect=require('expect');
var {generateMessage,generateLocationMessage}=require('./message')


describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var from='Jen';
    var text='Heyyyy';
    var message=generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});


  });
});
describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from='Jen';
    var latitude=1;
    var longitude=1;
    var url='https://www.google.com/maps?q=1,1';
    var location=generateLocationMessage(from,latitude,longitude);
    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from,url});


  });
});
