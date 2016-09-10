var socket = io();
socket.emit('hello',{'hi':'hello world!'});