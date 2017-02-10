playBtn = $('#play');
song = new Audio('chicken_attack.mp3');
duration = song.duration;

song.type= 'audio/mpeg';
song.src= 'chicken_attack.mp3';

$('#seek').attr('max',song.duration);
play();

playBtn.click(function(e) {
  e.preventDefault();
  if(song.paused) {
    play();
  } else {
    pause();
  }
});

song.addEventListener('timeupdate',function (){
  curtime = parseInt(song.currentTime, 10);
  $("#seek").val(curtime);
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
