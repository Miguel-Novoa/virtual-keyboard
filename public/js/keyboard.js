const capslock = document.querySelector('#capslock');
const maj = document.querySelector('#maj');
const backspace = document.querySelector('#backspace');
const enter = document.querySelector('#enter');
const capslockIndicator = document.querySelector('#capslockIndicator');

let capslockState = 'lowercase';
let majState = 'lowercase';

//Ajout texte des petites touches lorsque cliquées dessus
smallKeys.forEach(key => key.addEventListener('click', ()=>{
    textZone.value = textZone.value + key.querySelector('p').innerHTML;
    if(majState == 'uppercase'){
        majState = 'lowercase'
        smallKeys.forEach(key => key.querySelector('p').innerHTML = key.querySelector('p').innerHTML.toLowerCase());
    };
    })
);

spacebar.addEventListener('click', ()=>{
    textZone.value = textZone.value + " ";
});

backspace.addEventListener('click', ()=>{
    textZone.value = textZone.value.slice(0, -1);
});

enter.addEventListener('click', ()=>{
    textZone.value = textZone.value + '\r\n';
})

capslock.addEventListener('click', ()=>{
    capslockIndicator.style.display = 'none';
    switch(capslockState){
        case 'lowercase' :
            smallKeys.forEach(key => key.querySelector('p').innerHTML = key.querySelector('p').innerHTML.toUpperCase());
            capslockState = 'uppercase';
            capslockIndicator.style.display = 'block';
            break;
        case 'uppercase': 
            smallKeys.forEach(key => key.querySelector('p').innerHTML = key.querySelector('p').innerHTML.toLowerCase());
            capslockState = 'lowercase';
            capslockIndicator.style.display = 'none';
    };
});

maj.addEventListener('click', ()=>{
    switch(majState){
        case 'lowercase' :
            smallKeys.forEach(key => key.querySelector('p').innerHTML = key.querySelector('p').innerHTML.toUpperCase());
            majState = 'uppercase';
            break;
        case 'uppercase': 
            smallKeys.forEach(key => key.querySelector('p').innerHTML = key.querySelector('p').innerHTML.toLowerCase());
            majState = 'lowercase';
    };
});