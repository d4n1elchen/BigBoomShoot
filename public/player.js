playBtn = $('#play');
song = new Audio('chicken_attack.ogg');
duration = song.duration;

song.type= 'audio/ogg';
song.src= 'chicken_attack.ogg';

$('#seek').attr('max',song.duration);

playBtn.click(function(e) {
  e.preventDefault();
  if(song.paused) {
    play();
  } else {
    pause();
  }
});

playBtn.click();

song.addEventListener('timeupdate',function (){
  curtime = parseInt(song.currentTime, 10);
  $("#seek").val(curtime);
  $("#seek").css({
    'background-image':'-webkit-linear-gradient(left ,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) '+curtime+'%,#fff '+curtime+'%, #fff 100%)'
  });
});

song.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

function play() {
    song.play();
    playBtn.removeClass("play-pause__play");
    playBtn.addClass("play-pause__pause");
}

function pause() {
    song.pause();
    playBtn.removeClass("play-pause__pause");
    playBtn.addClass("play-pause__play");
}
