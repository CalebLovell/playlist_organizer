import React, { Component } from 'react'
import axios from 'axios';
import PlaylistSlot from './PlaylistSlot';

class Song extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            artist: '',
            album: '',
            time: '',
        };
    };

    render() {
        axios
            .get(`/api/playlist/1`)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    artist: res.data.artist,
                    album: res.data.album,
                    time: res.data.time,
                })
            })
            .catch(err => {
                console.log(`there was an error: ${err}`)
            })

        let { title, artist, album, time } = this.state;
        return (
            <div className="song">
                <div className="song-text-div">
                    <div className="song-text-div-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="song-text-div-artist">
                        <h2>{artist}</h2>
                    </div>
                    <div className="song-text-div-time">
                        <h2>{time}</h2>
                    </div>
                </div>
            </div>
        );
    };
};

export default Song;