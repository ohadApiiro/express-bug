const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

function handleHello(req, res) {
    res.send('yo!');
}


app.get('/yo', handleHello);


