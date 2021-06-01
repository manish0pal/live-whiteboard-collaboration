const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server,{cors:"*"});

let counter = 0;
const port = 8080;
server.listen(port, () => console.log(`server is running on port ${port}`));

io.on('connection',(socket)=>{
    console.log("user-ID: "+socket.id)
   
})

io.on('connection', onConnection);

function onConnection(socket){
  socket.on('drawing', (data) => {
      counter = counter +1
      console.log(counter);
      socket.broadcast.emit('drawing', data)
    });

}
