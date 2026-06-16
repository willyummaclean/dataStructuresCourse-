// 🎵 Simple Song Node class - represents a song in our playlist
class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Points to the next song in the playlist
  }
  
  toString() {
    return `${this.title} - ${this.artist}`;
  }
}

// Create a sample playlist
const song1 = new SongNode("Bohemian Rhapsody", "Queen");
const song2 = new SongNode("Hotel California", "Eagles");
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin");
const song4 = new SongNode("Sweet Child O' Mine", "Guns N' Roses");

// Connect the songs together
song1.next = song2;
song2.next = song3;
song3.next = song4;
// song4.next is null (end of playlist)

// ⏱️ Alex's First Playlist Challenge!
// 🔓 Uncomment the below code section and implement the required logic:


function playNextSong(playlist, targetSong) {
  // Find the target song and play the song that comes after it
  // targetsong parameter is a string with "Tile - Band" ex. "Hotel California - Eagles"
  // Return the next song's string representation, or "End of playlist" if no next song
  
  let currentSong = playlist;
  while (currentSong !== null) {
  if (currentSong.toString() === targetSong) {
    return currentSong.next ? currentSong.next.toString() : "End of playlist";
  }
  currentSong = currentSong.next;
  }
  
  // TODO: Traverse the playlist to find the target song
  // Hint: Use a while loop and check currentSong.toString()
  
  return "End of playlist";
}

function removeSong(playlist, targetTitle) {
  // Remove a song from the playlist by title
  // Return the new head of the playlist
  
  // Handle case where first song should be removed
  if (playlist && playlist.title === targetTitle) {
    return playlist.next;
  }
  
  let currentSong = playlist;
  while (currentSong !== null){
    if (currentSong.next !== null){
      let nextSong = currentSong.next
      if (nextSong.title === targetTitle){
        currentSong.next = nextSong.next
        return playlist
      }
      currentSong =  currentSong.next
    }
  }
  
  // TODO: Find the song before the one to remove
  // Hint: Check if currentSong.next exists and if its title matches
  
  return playlist; // Return original head if song not found
}

function countSongs(playlist) {
  // Count the total number of songs in the playlist
  // Return the count as a number
  
  let count = 0;
  let currentSong = playlist;

  while (currentSong !== null){
    count ++
    currentSong = currentSong.next
  }
  
  // TODO: Traverse the entire playlist and count songs
  // Hint: Use a while loop and increment count for each song
  
  return count;
}

function navigatePlaylist(currentSong, direction, steps = 1) {
  // Navigate forward or backward in a doubly linked playlist
  // direction: "forward" or "backward"
  // steps: number of songs to move
  // Return the destination song or null if can't move that far
  
  let current = currentSong;

  if (current !== null){
    for (let i = 0; i < steps; i++){
      if (direction === "forward"){
        if(current.next){
          current = current.next}
        else{
          return null
        }
      } 
      else {
        if(current.prev){
          current = current.prev}
        else{
          return null
        }
      }
    }
    return current
  }
}

  function calculatePlaylistDuration(head) {
  // Calculate the total duration of all songs in the playlist
  // Return the total duration in seconds
  
  let totalDuration = 0;
  let current = head;

  while (current !== null){
    totalDuration += current.duration
    if(current.next !== null){
      current = current.next
    }
    else{
      return totalDuration
    }
  }
  
  // TODO: Traverse the playlist and sum up all song durations
  // Hint: Use the basic traversal pattern with a while loop
  
  return totalDuration;
}