const BODY = document.querySelector('body');

const title = document.createElement('div');
title.innerHTML = 'Virtual Keyboard on WIN OS';
title.classList.add('title');
BODY.append(title);

const textArea = document.createElement('textarea');
BODY.append(textArea);

class Keys {
    constructor(name, value, code) {
        this.name = null;
        this.value = null;
        this.code = null;
    }
    createKey (index) {
        const KEY = document.createElement('div');
        KEY.classList.add('key');
        KEY.innerHTML = ALL_KEYS[index];
        KEY.setAttribute('id', `key${index}`);
        CONTAINER.append(KEY);
    }
}

class Backspace extends Keys {
    deleteSymbol(text) {
        return text.replace(/.$/, '');
    }
}



const KEY_NUMBERS = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
const KEY_LETTERS = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
let arr = [];
const ALL_KEYS_CODE = [1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 32];
const ALL_KEYS = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "|", 'del',
                'capsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
                'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'shift',
                'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', 'left', 'down', 'right'
]
document.onkeypress = (event) => {
arr.push(event.keyCode);
console.log(arr);
} 

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
BODY.append(CONTAINER);

for (let i = 0; i < ALL_KEYS.length; i++) {
    new Keys().createKey(i);    
}

CONTAINER.addEventListener('click', (event) => {
    if(event.target.classList.contains('key')){
        let text = textArea.innerHTML;
        
        let number = Number(event.target.getAttribute('id').replace(/[a-zа-яё]/gi, ''));
        if(number === 13){
            textArea.innerHTML = new Backspace().deleteSymbol(text);
        } else {
        textArea.innerHTML = text + ALL_KEYS[number];
        }
    }
})