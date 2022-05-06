let drum = [
    {
        id: 1,
        name: 'kick',
        src: 'assets/sounds/kick.wav',
        img: 'assets/img/kick.png',
    },

    {
        id: 2,
        name: 'snare',
        src: 'assets/sounds/snare.wav',
        img: 'assets/img/snare.png',
    },

    {
        id: 3,
        name: 'close-hat',
        src: 'assets/sounds/closedHat.wav',
        img: 'assets/img/closedHat.png',
    },

    {
        id: 4,
        name: 'open-hat',
        src: 'assets/sounds/openedHat.wav',
        img: 'assets/img/closedHat.png',
    },

    {
        id: 5,
        name: 'campanaccio',
        src: 'assets/sounds/campanaccio.mp3',
        img: 'assets/img/campanaccio.png',
    },

    {
        id: 6,
        name: 'rimshot',
        src: 'assets/sounds/rimshot.wav',
        img: 'assets/img/rimshot.png',
    },

    {
        id: 7,
        name: 'bacchettine',
        src: 'assets/sounds/bacchettine.mp3',
        img: 'assets/img/bacchettine.png',
    },

    {
        id: 8,
        name: 'tom-basso',
        src: 'assets/sounds/tom_.mp3',
        img: 'assets/img/tom_.webp',
    },

 {
        id: 9,
        name: 'metronomo',
        src: 'assets/sounds/metronomo.mp3',
        img: 'assets/img/metronomo.webp',
    },
 
 {      id: 10,
        name: 'clap',
        src: 'assets/sounds/clap.wav',
        img: 'assets/img/clap.png',
    },
 
 {      id: 11,
        name: 'crash',
        src: 'assets/sounds/crash.wav',
        img: 'assets/img/crash.webp',
    },

 {      id: 12,
        name: 'ride',
        src: 'assets/sounds/ride.wav',
        img: 'assets/img/ride.png',
    },
 
 {      id: 13,
        name: 'splashh',
        src: 'assets/sounds/splashh.wav',
        img: 'assets/img/splashh.png',
    },
 
 {      id: 14,
        name: 'ridebell',
        src: 'assets/sounds/ridebell.wav',
        img: 'assets/img/ridebell.webp',
    },
 
 {      id: 15,
        name: 'pedale-hat',
        src: 'assets/sounds/pedale-hat.wav',
        img: 'assets/img/pedale-hat.webp',
    }
 
];


let container = document.querySelector('.container');
for (let i = 0; i < drum.length; i++){
    let drumItem = document.createElement('div');
    drumItem.classList.add('drum-item');
    let drumImg = document.createElement('img');
    drumImg.src = drum[i].img;
    drumItem.appendChild(drumImg);
    container.appendChild(drumItem);
}


let drumItem = document.querySelectorAll('.drum-item');
for (let i = 0; i < drum.length; i++){
    drumItem[i].addEventListener('click', function(){
        let audio = new Audio(drum[i].src);
        audio.play();
    });
}

let key = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];


document.addEventListener('keydown', function (e) {
    if (key.includes(e.key)) {
        let index = key.indexOf(e.key);
        if (index > drum.length) {
            console.log('not found');
        } else {
            let audio = new Audio(drum[index].src);
            audio.play();
        }
    }
});
