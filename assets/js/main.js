function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Stop the function 

    audio.currentTime = 0; // Rewind to start of audio clip
    audio.play();
    key.classList.add('playing');
    //console.log(audio, key);
}

function removeTransition(e){
    //console.log(e);
    if(e.propertyName !== 'transform') return; // Skip it if it is not a transform
    //console.log(e.propertyName);
    //console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);