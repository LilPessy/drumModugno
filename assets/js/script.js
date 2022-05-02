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
