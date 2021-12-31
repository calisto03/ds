let musicatual=0;

const music=document.querySelector('#audio');
const barra= document.querySelector('.seek-bar');
const nome_musica=document.querySelector('.music-name');
const nome_artista=document.querySelector('.artist-name');
const tempo_atual=document.querySelector('.current-time');
const musicDuration=document.querySelector('.song-duration');
const play=document.querySelector('.play');
const depois=document.querySelector('.depois');
const antes=document.querySelector('.antes');
const imagem=document.querySelector('.imagem');

play.addEventListener('click',()=> {
    if(play.className.includes('pausar')){
        music.play();
    } else{
        music.pause();
    }
     play.classList.toggle('pausar');
})

const setMusica= (i) =>{
    barra.value=0;
    let song=songs[i];
  musicatual=i;
  music.src=song.path;

  nome_musica.innerHTML=song.name;
  nome_artista.innerHTML=song.artist;
  imagem.style.backgroundImage=`url('${song.cover}')`;
  tempo_atual.innerHTML='00:00';
 setTimeout(()=>{
     barra.max=music.duration;
     musicDuration.innerHTML= formatar(music.duration);
     },300);
}
setMusica(0);

const formatar=(time) =>{
    let min=Math.floor(time/60);
    if(min<1){
        min=`0${min}`;
    }
    let sec=Math.floor(time%60);
    if(sec<1){
        sec=`0${min}`;
    }
    return `0${min} : 0${sec}`;

}

setInterval(()=>{
    barra.value=music.currentTime;
    tempo_atual.innerHTML=formatar(music.currentTime);
    },500

)

barra.addEventListener('change',()=>{
    music.currentTime=barra.value;
}
)

const toca=()=>{
    music.play();
    play.classList.remove('pausar');
}

depois.addEventListener('click',()=>{
    if (musicatual>=songs.length - 1){
        musicatual=0;
    }else{
        musicatual++;
    }
    setMusica(musicatual);
toca();

    }
)

antes.addEventListener('click',()=>{
        if (musicatual<=0){
            musicatual=songs.length - 1;
        }else{
            musicatual--;
        }
        setMusica(musicatual);
      toca();

    }
)