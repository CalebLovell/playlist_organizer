import React, { Component } from 'react';
import './index.css';
import './App.css';
import Header from './components/Header'
import NewPlaylist from './components/NewPlaylist'
import OldPlaylist from './components/OldPlaylist'
import AddButton from './components/AddButton'
import DeleteButton from './components/DeleteButton'
import Song from './components/Song'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="controls">
          <div className="control-buttons-div">
            <AddButton />
            <DeleteButton />
          </div>
        </div>
        <div className="song">
          <Song />
        </div>
        <div className="playlists">
          <NewPlaylist />
          <OldPlaylist />
        </div>
        <div className="playlist-buttons">
        </div>
      </div>
    );
  };
};

export default App;
