var playlist = new Object({Prince: 'Kiss', Tupac: 'Killuminati'});

function updatePlaylist(obj, key, value) {
  obj[key] = value;

  return obj;
}

function removeFromPlaylist(obj, key) {
  console.log(obj.key);
  delete obj.key;

  return obj;
} 