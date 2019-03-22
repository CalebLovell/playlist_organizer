let newPlaylist = [ // Today's Top Hits Spotify List
    {
        id: 1,
        title: 'Sucker',
        artist: 'Jonas Brothers',
        album: 'Sucker',
        time: '3:01',
    },
    {
        id: 2,
        title: "Don't Call Me Up",
        artist: 'Mabel',
        album: 'Ivy To Roses',
        time: '2:58',
    },
    {
        id: 3,
        title: "I Can't Get Enough",
        artist: "benny blanco",
        album: "I Can't Get Enough",
        time: '2:38',
    },
    {
        id: 4,
        title: 'My Bad',
        artist: 'Khalid',
        album: 'My Bad',
        time: '2:46',
    },
    {
        id: 5,
        title: 'Here With Me',
        artist: 'Marshmello',
        album: 'Here With Me',
        time: '2:36',
    },
    {
        id: 6,
        title: 'Con Calma',
        artist: 'Daddy Yankee',
        album: 'Con Calma',
        time: '3:13',
    },
    {
        id: 7,
        title: 'The Bones',
        artist: 'Marren Morris',
        album: 'GIRL',
        time: '3:17',
    },
    {
        id: 8,
        title: 'Last Hurrah',
        artist: 'Bebe Rexha',
        album: 'Last Hurrah',
        time: '2:30',
    },
    {
        id: 9,
        title: 'R.I.P.',
        artist: 'Sofia Reyes',
        album: 'R.I.P.',
        time: '3:07',
    },
    {
        id: 10,
        title: "break up with your girlfriend, i'm bored",
        artist: 'Ariana Grande',
        album: 'thank u, next',
        time: '3:10',
    },
];
let playlistOne = [
    {
        id: 1,
        title: 'Example Song One aaaaa',
        artist: 'Example Artist One aaaaa',
        album: 'Example Album One aaaaa',
        time: '3:01',
    },
    {
        id: 2,
        title: "Example Song Two aaaaa",
        artist: 'Example Artist Two aaaaa',
        album: 'Example Album Two aaaaa',
        time: '2:58',
    },
    {
        id: 3,
        title: "Example Song Three aaaaa",
        artist: "Example Artist Three aaaaa",
        album: "Example Album Three aaaaa",
        time: '2:38',
    },
];
let playlistTwo = [
    {
        id: 1,
        title: 'Example Song One bbbbb',
        artist: 'Example Artist One bbbbb',
        album: 'Example Album One bbbbb',
        time: '3:01',
    },
    {
        id: 2,
        title: "Example Song Two bbbbb",
        artist: 'Example Artist Two bbbbb',
        album: 'Example Album Two bbbbb',
        time: '2:58',
    },
    {
        id: 3,
        title: "Example Song Three bbbbb",
        artist: "Example Artist Three bbbbb",
        album: "Example Album Three bbbbb",
        time: '2:38',
    },
];
let playlistThree = [
    {
        id: 1,
        title: 'Example Song One ccccc',
        artist: 'Example Artist One ccccc',
        album: 'Example Album One ccccc',
        time: '3:01',
    },
    {
        id: 2,
        title: "Example Song Two ccccc",
        artist: 'Example Artist Two ccccc',
        album: 'Example Album Two ccccc',
        time: '2:58',
    },
    {
        id: 3,
        title: "Example Song Three ccccc",
        artist: "Example Artist Three ccccc",
        album: "Example Album Three ccccc",
        time: '2:38',
    },
];
let playlistFour = [
    {
        id: 1,
        title: 'Example Song One ddddd',
        artist: 'Example Artist One ddddd',
        album: 'Example Album One ddddd',
        time: '3:01',
    },
    {
        id: 2,
        title: "Example Song Two ddddd",
        artist: 'Example Artist Two ddddd',
        album: 'Example Album Two ddddd',
        time: '2:58',
    },
    {
        id: 3,
        title: "Example Song Three ddddd",
        artist: "Example Artist Three ddddd",
        album: "Example Album Three ddddd",
        time: '2:38',
    },
];

let playlists = {
    playlistOne,
    playlistTwo,
    playlistThree,
    playlistFour
}



module.exports = {
    getNewSong: (req, res) => {
        let { id } = req.params
        res.send(newPlaylist[id - 1])
    },
    getNewPlaylist: (req, res) => {
        res.send(newPlaylist)
    },
    getOldPlaylist: (req, res) => {
        let { playlistName } = req.params;
        res.send(playlists[playlistName]);
    },
    // create: (req, res) => {

    // },
    // update: (req, res) => {

    // },
    // delete: (req, res) => {

    // },
};