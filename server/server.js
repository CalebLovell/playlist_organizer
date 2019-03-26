const express = require('express');
const app = express();
const playlistController = require ('./controllers/controller');

app.use(express.json());

app.get('/api/playlist/:id', playlistController.getNewSong);
app.get('/api/newPlaylist/', playlistController.getNewPlaylist);
app.get('/api/oldPlaylist/:playlistName', playlistController.getOldPlaylist);
// app.post('/api/playlist', playlistController.post);
app.put('/api/newPlaylist/', playlistController.updateNewPlaylist);
app.put('/api/oldPlaylist/', playlistController.updateOldPlaylist);
app.delete('/api/newPlaylist', playlistController.deleteSong);


const PORT = 7999;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});