
const audio = new Audio('https://f005.backblazeb2.com/file/menghitunghari-music/marry_you.mp3');

const PlayAudio = () => {
    
    audio.volume = 0.5;
    audio.loop = true;
    return audio;
};

export default PlayAudio;
  