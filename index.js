const ws = require('ws');

const PORT = 3000

const server = new ws.Server({
	port: PORT
})

server.on('connection', (socket) => {
	socket.on('message', (message) => {
		socket.send(`${message}`);
	})
})

console.log('Server is listening on port: ' + PORT);