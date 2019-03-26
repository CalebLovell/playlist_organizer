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

  addSong = (song) => {
    axios
      .put(`/api/newPlaylist/`)
      .then(res => {
        this.setState({
          newSongsList: res.data,
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
    if (this.state.newSongsList[0]) {
      axios
        .put(`/api/oldPlaylist/`, song)
        .then(res => {
          this.setState({
            oldSongsList: res.data,
          })
        })
        .catch(err => {
          console.log(`there was an error: ${err}`)
        })
    }
  };

  deleteSong = (song) => {
    axios
      .delete(`/api/newPlaylist/`, song)
      .then(res => {
        this.setState({
          newSongsList: res.data,
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
  }

  addOldSongsList = (playlistName) => {
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
        {/* <div className="playlist-titles-div">
          <PlaylistTitles />
        </div> */}
        <div className="song">
          <Song />
        </div>
        <main className="playlists">
          <NewPlaylist newSongsList={this.state.newSongsList} />
          <OldPlaylist oldSongsList={this.state.oldSongsList} />
        </main>
        <footer className="controls">
          <div className="control-buttons-div">
            <AddButton addSong={this.addSong} newSongsList={this.state.newSongsList} />
            <DeleteButton deleteSong={this.deleteSong} />
          </div>
        </footer>
        {/* <div className="playlist-changer">
          <div className="playlist-buttons-div">
            <PlaylistButton playlistTitle={playlistOne} addOldSongsList={this.addOldSongsList} />
            <PlaylistButton playlistTitle={playlistTwo} addOldSongsList={this.addOldSongsList} />
            <PlaylistButton playlistTitle={playlistThree} addOldSongsList={this.addOldSongsList} />
            <PlaylistButton playlistTitle={playlistFour} addOldSongsList={this.addOldSongsList} />
          </div>
        </div> */}
      </div>
    );
  };
};

export default App;
