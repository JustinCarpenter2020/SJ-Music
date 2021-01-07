import { ProxyState } from "../AppState.js";
import Song from "../Models/Song.js";
import songService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let songs = ProxyState.songs
  let template = ""
  songs.forEach(song => {
template += song.Template

  })
  document.getElementById("songs").innerHTML = template 
 }

/**Draws the Users saved songs to the page */
function _drawPlaylist() { 
  let ourSongs = ProxyState.playlist
  let template = ""
ourSongs.forEach(song => {
  template += song.playlistTemplate
})
  document.getElementById('playlist').innerHTML = template
}

function _drawActive(){
  let template = ""
  if(ProxyState.activeSong){
    template = ProxyState.activeSong.activeSongTemplate
  }
  document.getElementById('active').innerHTML = template
}

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your listeners and get your data
    ProxyState.on('songs', _drawResults)
    ProxyState.on('activeSong', _drawActive)
    ProxyState.on('playlist', _drawPlaylist)

    this.getAllSongs()
  }

getAllSongs(){
  try {
    songService.getAllSongs()
  } catch (error) {
    console.error(error)
  }
}

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
  //  * @param {string} id
   */
  addSong() {
  try{
    songService.addSong()
  } catch (error) {
    console.error(error)
  }
   }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {
   try {
     songService.removeSong(id)
   } catch (error) {
     console.error(error)
   }
  }

  getSong(id) {
    try {
      songService.getSongs(id)
    } catch (error) {
      console.error(error)
    }
  }
}
