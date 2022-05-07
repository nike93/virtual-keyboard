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
    
    createKey (array, index) {
        const KEY = document.createElement('div');
        KEY.classList.add('key');
        KEY.innerHTML = array[index];
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
                'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'del',
                'capsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
                'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\&#8593;', 'shift',
                'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '\&#8592;', '\&#8595;', '\&#8594;'
]
const ALL_KEYS_BIG = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "|", 'del',
                'capsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter',
                'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '\&#8593;', 'shift',
                'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '\&#8592;', '\&#8595;', '\&#8594;'
]

const ALL_KEYS_RUS = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'del',
                'capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'enter',
                'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\&#8593;', 'shift',
                'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '\&#8592;', '\&#8595;', '\&#8594;'
]
const ALL_KEYS_RUS_BIG = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "\\", 'del',
                'capsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'enter',
                'shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '\&#8593;', 'shift',
                'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '\&#8592;', '\&#8595;', '\&#8594;'
]
document.onkeypress = (event) => {
arr.push(event.keyCode);
console.log(arr);
} 

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
BODY.append(CONTAINER);

for (let i = 0; i < ALL_KEYS.length; i++) {
    new Keys().createKey(ALL_KEYS, i);    
}

CONTAINER.addEventListener('click', (event) => {
    if(event.target.classList.contains('key')){
        let text = textArea.innerHTML;
        
        let number = Number(event.target.getAttribute('id').replace(/[a-zа-яё]/gi, ''));
        
        switch(number){
            //backspace
            case 13:
                textArea.innerHTML = new Backspace().deleteSymbol(text);
                break;
            //capsLock
            case 29:                
                //CONTAINER.innerHTML = null;
                const CAPS = document.querySelector('#key29');
                if (CAPS.classList.contains('caps_on')) {
                    for (let i = 0; i < ALL_KEYS.length; i++) {
                        //new Keys().createKey(ALL_KEYS, i);   
                        document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS[i];
                    }
                    CAPS.classList.remove('caps_on');
                } else {
                    for (let i = 0; i < ALL_KEYS_BIG.length; i++) {
                        //new Keys().createKey(ALL_KEYS_BIG, i);    
                        document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_BIG[i];
                    }
                    CAPS.classList.add('caps_on');
                }
                
                break;
            default:
                textArea.innerHTML = text + document.querySelector(`#key${number}`).innerHTML;

        }
        
    }
})

document.addEventListener('keydown', (event) => {
    console.log(event.code);
})

const CHANGE_LANG = document.createElement('div');
CHANGE_LANG.innerHTML = "Для смены языка нажмите левые Alt + Shift";
CHANGE_LANG.classList.add('lang');
BODY.append(CHANGE_LANG);