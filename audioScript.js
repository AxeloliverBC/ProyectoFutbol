let audio1, audio2, currentAudio;

function initAudio() {
    audio1 = document.getElementById('ambienteEstadio1');
    audio2 = document.getElementById('ambienteEstadio2');
    
    if (!audio1 || !audio2) {
        console.error('No se encontraron los elementos de audio');
        return;
    }

    audio1.volume = 0.3;
    audio2.volume = 0.3;
    audio1.loop = false;
    audio2.loop = false;

    let audioPlaying = sessionStorage.getItem('audioPlaying') === 'true';
    let currentTime = parseFloat(sessionStorage.getItem('audioTime')) || 0;
    let currentAudioId = sessionStorage.getItem('currentAudioId') || 'ambienteEstadio1';

    currentAudio = document.getElementById(currentAudioId);
    
    if (audioPlaying) {
        currentAudio.currentTime = currentTime;
        playAudio();
    } else {
        currentAudio = audio1;
        playAudio();
    }

    audio1.addEventListener('ended', () => {
        console.log('Audio 1 terminó');
        switchAudio(audio2);
    });
    audio2.addEventListener('ended', () => {
        console.log('Audio 2 terminó');
        switchAudio(audio1);
    });

    setInterval(updateAudioState, 1000);
}

function playAudio() {
    let playPromise = currentAudio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            console.log('Reproducción iniciada con éxito');
        }).catch(error => {
            console.error('Error al reproducir audio:', error);
        });
    }
}

function switchAudio(nextAudio) {
    console.log('Cambiando de audio');
    currentAudio = nextAudio;
    currentAudio.currentTime = 0; // Asegurarse de que el nuevo audio comience desde el principio
    playAudio();
}

function updateAudioState() {
    if (!currentAudio.paused) {
        sessionStorage.setItem('audioPlaying', 'true');
        sessionStorage.setItem('audioTime', currentAudio.currentTime);
        sessionStorage.setItem('currentAudioId', currentAudio.id);
    } else {
        sessionStorage.setItem('audioPlaying', 'false');
    }
}

document.addEventListener('DOMContentLoaded', initAudio);
document.addEventListener('click', playAudio, { once: true });

// Eliminamos el cambio forzado