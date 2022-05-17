import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
      
const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
player.on('timeupdate', onPlay);

      player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });

	