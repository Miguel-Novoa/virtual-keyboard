const switchInput = document.querySelector('#switch');
const smallKeys = document.querySelectorAll('.smallKey');
const mediumKeys = document.querySelectorAll('.mediumKey');
const spacebar = document.querySelector('#spacebar');
const keyboard = document.querySelector('#keyboard');
const main = document.querySelector('main');
const header = document.querySelector('header');
const switchTitle = document.querySelector('#switchTitle');
const textZone = document.querySelector('#text');

const switchActivation = () =>{
    if(switchInput.checked == true){
        smallKeys.forEach(function(key){
            key.classList.remove('smallKeyStyleLight');
            key.classList.add('smallKeyStyleNight');
        });

        mediumKeys.forEach(function(key){
            key.classList.remove('mediumKeyStyleLight');
            key.classList.add('mediumKeyStyleNight')
        });

        spacebar.classList.remove('spacebarStyleLight');
        spacebar.classList.add('spacebarStyleNight');

        keyboard.classList.remove('keyboardStyleLight');
        keyboard.classList.add('keyboardStyleNight');

        main.classList.add('mainNight');
        header.classList.add('headerNight');
        switchTitle.classList.add('switchBtnTitle');
        textZone.classList.add('textZoneNight');
        textZone.classList.remove('textZoneLight');
    }else{
        smallKeys.forEach(function(key){
            key.classList.remove('smallKeyStyleNight');
            key.classList.add('smallKeyStyleLight')
        });

        mediumKeys.forEach(function(key){
            key.classList.remove('mediumKeyStyleNight');
            key.classList.add('mediumKeyStyleLight')
        });

        spacebar.classList.remove('spacebarStyleNight');
        spacebar.classList.add('spacebarStyleLight');

        keyboard.classList.remove('keyboardStyleNight');
        keyboard.classList.add('keyboardStyleLight');

        main.classList.remove('mainNight');
        header.classList.remove('headerNight');
        switchTitle.classList.remove('switchBtnTitle');
        textZone.classList.remove('textZoneNight');
        textZone.classList.add('textZoneLight');
    };
};

switchInput.addEventListener('click', switchActivation);