var library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
       var playlists = library.playlists
       for (list in playlists) {
              console.log(`${list}: ${playlists[list].name} - ${playlists[list].tracks.length} tracks`)
       }
}
//printPlaylists()


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
       var tracks = library.tracks
       for (track in tracks) {
              console.log(`${track}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
       }
}
//printTracks()

var printTracks2 = function (tracksToPrint) {
       var tracks = library.tracks
       for (track in tracks) {
              if (tracksToPrint.includes(tracks[track].id)) {
                     console.log(`${track}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
              }
       }

}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
       var playlists = library.playlists
       for (list in playlists) {
              if (playlists[list].id === playlistId) {
                     console.log(`${list}: ${playlists[list].name} - ${playlists[list].tracks.length} tracks`)
                     printTracks2(playlists[list].tracks)
              }
       }
}
//printPlaylist("p01")


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
       var playlists = library.playlists
       if (playlists.hasOwnProperty(playlistId)) {
              if (!playlists[playlistId].tracks.includes(trackId)) {
                     if (!library.tracks.hasOwnProperty(trackId)) {
                            console.log(`${trackId} does not exist`)
                     } else {
                            playlists[playlistId].tracks.push(trackId)
                     }
              } else {
                     console.log(`${trackId} already exists`)
              }
       } else {
              console.log(`${playlistId} does not exist`)
       }
       console.log(playlists[playlistId])
}
//addTrackToPlaylist("t01", "p03")


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
       let track = {
              id: uid(),
              name: name,
              artist: artist,
              album: album
       }
       library.tracks[track.id] = track
       console.log(library.tracks)
}
//addTrack("Bla bla", "artist bla", "album bla")

// adds a playlist to the library

var addPlaylist = function (name) {
       let playlist = {
              id: uid(),
              name: name,
              tracks: []
       }
       library.playlists[playlist.id] = playlist
       console.log(library.playlists)
}
// addPlaylist("blo blo")


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var searchFunc = function (query, input) {
       var reg = new RegExp(query,"g")
       if (input.search(reg) === -1) {
              return null
       }
       return true
}

var printSearchResults = function (query) {
       var found = false
       var mytracks = []
       for (track in library.tracks) {
              found = searchFunc(query, library.tracks[track].name) || searchFunc(query, library.tracks[track].artist) || searchFunc(query, library.tracks[track].album)
              if (found === true) {
                     mytracks.push(library.tracks[track])
              }
       }
       return mytracks
}
console.log(printSearchResults("Wood"))
