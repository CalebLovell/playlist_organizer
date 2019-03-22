import React, { Component } from 'react';
import './index.css';
import './App.css';
import axios from 'axios'
import Header from './components/Header';
import NewPlaylist from './components/NewPlaylist';
import OldPlaylist from './components/OldPlaylist';
import AddButton from './components/AddButton';
import DeleteButton from './components/DeleteButton';
import Song from './components/Song';
import PlaylistButton from './components/PlaylistButton';
import PlaylistTitles from './components/PlaylistTitles';

let playlistOne = 'playlistOne'
let playlistTwo = 'playlistTwo'
let playlistThree = 'playlistThree'
let playlistFour = 'playlistFour'

class App extends Component {
  constructor() {
    super();

    this.state = {
      newSongsList: [{}],
      oldSongsList: [{}],
    };
  };

  addSong = () => {
    this.setState({
      oldSongsList: [{
        id: 1,
        title: 'Sucker',
        artist: 'Jonas Brothers',
        album: 'Sucker',
        time: '3:01',
      }, ...this.state.oldSongsList],
      newSongsList: this.state.newSongsList.shift()
    });
  };

  updateOldSongsList = (playlistName) => {
    axios
      .get(`/api/oldPlaylist/${playlistName}`)
      .then(res => {
        this.setState({
          oldSongsList: res.data,
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
  }

  componentDidMount() {
    axios
      .get(`/api/newPlaylist/`)
      .then(res => {
        this.setState({
          newSongsList: res.data,
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
    axios
      .get(`/api/oldPlaylist/playlistOne`)
      .then(res => {
        this.setState({
          oldSongsList: res.data,
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="controls">
          <div className="control-buttons-div">
            <AddButton addSong={this.addSong} />
            <DeleteButton />
          </div>
        </div>
        <div className="song">
          <Song />
        </div>
        <div className="playlist-titles-div">
          <PlaylistTitles />
        </div>
        <div className="playlists">
          <NewPlaylist newSongsList={this.state.newSongsList} />
          <OldPlaylist oldSongsList={this.state.oldSongsList} />
        </div>
        <div className="playlist-changer">
          <div className="playlist-buttons-div">
            <PlaylistButton playlistTitle={playlistOne} updateOldSongsList={this.updateOldSongsList} />
            <PlaylistButton playlistTitle={playlistTwo} updateOldSongsList={this.updateOldSongsList} />
            <PlaylistButton playlistTitle={playlistThree} updateOldSongsList={this.updateOldSongsList} />
            <PlaylistButton playlistTitle={playlistFour} updateOldSongsList={this.updateOldSongsList} />
          </div>
        </div>
      </div>
    );
  };
};

export default App;
