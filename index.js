const ws = require('ws');
const express = require('express');

const PORT = process.env.PORT || 3000;

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new ws.Server({ server });

wss.on('connection', (socket) => {
	socket.on('message', (message) => {
		socket.send(`${message}`);
	})
})
