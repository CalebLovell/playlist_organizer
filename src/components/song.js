import React, { Component } from 'react'
import axios from 'axios';

class Song extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            artist: '',
            time: '',
        };
    };

    componentDidMount() {
    };

    render() {
        axios
            .get(`/api/playlist/1`)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    artist: res.data.artist,
                    time: res.data.time,
                })
            })
            .catch(err => {
                console.log(`there was an error: ${err}`)
            })
            
        return (
            <div className="song">
                <div className="song-text-div">
                    <h2>{this.state.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.artist}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.time}</h2>
                </div>
            </div>
        );
    };
};

export default Song;