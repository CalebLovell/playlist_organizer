const express = require('express');
const app = express();
const playlistController = require ('./controllers/controller');

app.use(express.json());



const PORT = 7999;
app.listen(`port listening on port: ${PORT}`);