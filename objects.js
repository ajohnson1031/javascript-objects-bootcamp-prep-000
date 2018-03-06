var playlist = new Object({Prince: 'Kiss', Tupac: 'Killuminati'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}
