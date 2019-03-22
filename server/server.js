const express = require('express');
const app = express();
const playlistController = require ('./controllers/controller');

app.use(express.json());

app.get('/api/playlist/:id', playlistController.getNewSong);
app.get('/api/playlist/', playlistController.getNewPlaylist);
// app.post('api/playlist', playlistController.post);
// app.put('api/playlist', playlistController.put);
// app.delete('api/playlist', playlistController.delete);


const PORT = 7999;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});