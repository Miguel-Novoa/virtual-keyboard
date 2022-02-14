const lettersKeys = document.querySelectorAll('.letters');
const switchKeysInput = document.querySelector('#switchKeys');

const qwerty = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j','k',
    'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const azerty = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k',
    'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n'];


const switchQwertyToAzerty = () =>{  
    if(switchKeysInput.checked == true){
        for(let j=0; j<lettersKeys.length; j++){
            for(let i=0; i<azerty.length; i++){
                lettersKeys[i].innerHTML = azerty[i];
            };
        };
    }else{
        for(let j=0; j<lettersKeys.length; j++){
            for(let i=0; i<qwerty.length; i++){
                lettersKeys[i].innerHTML = qwerty[i];
            };
        };
    };
};

switchKeysInput.addEventListener('click', switchQwertyToAzerty);
