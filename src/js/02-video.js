import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
      

const onPlay = function (data) {
  const timeData = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', timeData);
  
};
player.on('timeupdate', onPlay);

      player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });

  player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time'))).then(function (seconds) {
    // seconds = the actual time that the player seeked to 
    
  }).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
