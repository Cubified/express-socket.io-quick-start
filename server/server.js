var app = require('http').createServer(handler),
    io = require('socket.io')(app),
    fs = require('fs'),
	port = 80;

app.listen(port,()=>{
	console.log(`Listening on port ${port}`);
});

function handler (req, res) {
    var filename = `.\\client\\${(req.url === '/' ? 'index.html' : req.url)}`;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end(`Error loading ${req.url}`);
        }

        res.writeHead(200);
        res.end(data);
    });
}

io.on('connection', (socket) => {
	socket.on('hello',(data)=>{
		console.log(`Client says: ${data.hi}`);
	})
});