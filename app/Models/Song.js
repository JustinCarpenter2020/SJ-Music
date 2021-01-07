export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <div class="card" onclick="app.songsController.getSong()">
    <div class="card-body">
    <img src="${this.albumArt}">
        <h4 class="card-title">${this.artist}</h4>
        <p class="card-text">${this.title}</p>
    </div>
        `;
  }

  get playlistTemplate() {
    return `
    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">${this.title}</h4>
                            <p class="card-text">${this.artist}</p>
                        </div>
        `;
  }

  get activeSongTemplate() {
    return `
    <p>Now Playing:</p>
                <div class="card">
                    <img src="${this.albumArt}" alt="">
                    <h1>${this.artist} - ${this.title}</h1>
                    <div class="card-body">
                        <h4 class="card-title">${this.album} | ${this.price} </h4>
                        <audio src="${this.preview}"></audio>
                    </div>
                </div>
    
    `
  }

}
