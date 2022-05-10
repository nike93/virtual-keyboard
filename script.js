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
       let position = textArea.selectionStart;
       return text.slice(0, position - 1) + text.slice(position);       
    }
}

document.onclick = function(event) {
    textArea.focus();
   };


let lang = 'en';
let caps = 'off';
const KEY_NUMBERS = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const KEY_NUMBERS_RUS = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
const KEY_LETTERS = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
let arr = [];
const ALL_KEYS_CODE = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
const ALL_KEYS_STRING = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
const ALL_KEYS = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'del',
                'capsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
                'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\&#8593;', 'shift',
                'ctrl', 'win', 'alt', '', 'alt', 'ctrl', '\&#8592;', '\&#8595;', '\&#8594;'
]
const ALL_KEYS_BIG = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "|", 'del',
                'capsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter',
                'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '\&#8593;', 'shift',
                'ctrl', 'win', 'alt', '', 'alt', 'ctrl', '\&#8592;', '\&#8595;', '\&#8594;'
]

const ALL_KEYS_RUS = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'del',
                'capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'enter',
                'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\&#8593;', 'shift',
                'ctrl', 'win', 'alt', '', 'alt', 'ctrl', '\&#8592;', '\&#8595;', '\&#8594;'
]
const ALL_KEYS_RUS_BIG = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "\\", 'del',
                'capsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'enter',
                'shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '\&#8593;', 'shift',
                'ctrl', 'win', 'alt', '', 'alt', 'ctrl', '\&#8592;', '\&#8595;', '\&#8594;'
];


const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
BODY.append(CONTAINER);

if(localStorage) {
    lang = localStorage.getItem('lang');
    caps = localStorage.getItem('caps');
}

//создание кнопок
if (lang === 'en') {
    if(caps === 'off') {
        ALL_KEYS.forEach((elem, index, arr) => {
            new Keys().createKey(arr, index);
        })
    } else {
        ALL_KEYS_BIG.forEach((elem, index, arr) => {
            new Keys().createKey(arr, index);            
        })
        document.querySelector('#key29').classList.add('caps_on');
    } 
}else {
        if(caps === 'off') {
            ALL_KEYS_RUS.forEach((elem, index, arr) => {
                new Keys().createKey(arr, index);
            })
        } else {
            ALL_KEYS_RUS_BIG.forEach((elem, index, arr) => {
                new Keys().createKey(arr, index);
            })
            document.querySelector('#key29').classList.add('caps_on');
        } 
    }



CONTAINER.addEventListener('click', (event) => {
    textArea.focus();
    if(event.target.classList.contains('key')){
        let text = textArea.value;
        
        let number = Number(event.target.getAttribute('id').replace(/[a-zа-яё]/gi, ''));
        let pos = textArea.selectionStart; 
        switch(number){
            //backspace
            case 13:
                if (pos === 0) {
                    break;
                } else {
                    textArea.value = new Backspace().deleteSymbol(text);                                               
                    textArea.setSelectionRange(pos - 1, pos - 1);
                    break;
                }
            //capsLock
            case 29:                
                const CAPS = document.querySelector('#key29');
                if (caps === 'on') {
                    if(lang === 'en') {
                        for (let i = 0; i < ALL_KEYS.length; i++) {
                            document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS[i];
                        }
                    } else {
                        for (let i = 0; i < ALL_KEYS.length; i++) {
                            document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_RUS[i];
                        }
                    }
                    CAPS.classList.remove('caps_on');
                    caps = 'off';
                    localStorage.setItem('caps', 'off');
                } else {
                    if(lang === 'en') {
                        for (let i = 0; i < ALL_KEYS_BIG.length; i++) {
                            document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_BIG[i];
                        }
                    } else {
                        for (let i = 0; i < ALL_KEYS_BIG.length; i++) {
                            document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_RUS_BIG[i];
                        }
                    }
                    CAPS.classList.add('caps_on');
                    caps = 'on';
                    localStorage.setItem('caps', 'on');
                }
                
                break;
                //tab
            case 14:
                textArea.value = textArea.value.slice(0, pos) + "    " + textArea.value.slice(pos);
                textArea.setSelectionRange(pos + 4, pos + 4);
                break;
            case 42:
                textArea.value += "";
                break;  
            case 55:
                textArea.value += "";
                break; 
            case 56:
                textArea.value += "";
                break; 
            case 57:
                textArea.value += "";
                break;
            case 58:
                textArea.value += " ";
                break;
            case 59:
                textArea.value += "";
                break;
            case 60:
                textArea.value += "";
                break;  
            case 28:
                textArea.value = textArea.value.slice(0, pos) + textArea.value.slice(pos + 1); 
                textArea.setSelectionRange(pos, pos);
                break;              
            case 41:
                textArea.value = textArea.value.slice(0, pos) + "\n" + textArea.value.slice(pos);
                textArea.setSelectionRange(pos + 1, pos + 1);
                break;   
            case 54:
                textArea.value += "";
                break;  
            default:
                textArea.value = text + document.querySelector(`#key${number}`).innerHTML;

        }
        
    }
})

CONTAINER.addEventListener('mouseup', () => {
    textArea.focus();
})

document.addEventListener('keydown', (event) => {
    textArea.focus();
    document.querySelector(`#key${ALL_KEYS_STRING.indexOf(event.code)}`).classList.add('key_press');
})
document.addEventListener('keyup', (event) => {
    textArea.focus();
    const keyLink = document.querySelector(`#key${ALL_KEYS_STRING.indexOf(event.code)}`);
    if(event.keyCode !== 116 && keyLink.classList.contains('key_press')){
        keyLink.classList.remove('key_press');
    }
})

const CHANGE_LANG = document.createElement('div');
CHANGE_LANG.innerHTML = "Для смены языка нажмите левые Alt + Shift";
CHANGE_LANG.classList.add('lang');
BODY.append(CHANGE_LANG);

//одновременное нажатие клавиш

function onKeys(func, ...codes) {
    let pressKeys = new Set();

    document.addEventListener('keydown', function(event) {
        pressKeys.add(event.code);

        for (let code of codes) {
            if (!pressKeys.has(code)) {
                return;
            }
        }
        pressKeys.clear();
        func();
    });

    document.addEventListener('keyup', function (event) {
        pressKeys.delete(event.code);
    })
}

//смена языка
onKeys(
    () => {
        if (lang === 'en') {
            if (caps === 'off') {
                for (let i = 0; i < ALL_KEYS.length; i++) {
                    document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_RUS[i];
                }
            } else {
                for (let i = 0; i < ALL_KEYS.length; i++) {
                    document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_RUS_BIG[i];
                }
            }
            lang = 'ru';
            localStorage.setItem('lang', 'ru');
        } else {
            if(caps === 'off') {
                for (let i = 0; i < ALL_KEYS.length; i++) {
                    document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS[i];
                }
            } else {
                for (let i = 0; i < ALL_KEYS.length; i++) {
                    document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_BIG[i];
                }
            }
            lang = 'en';
            localStorage.setItem('lang', 'en');
        }
    },
    'ShiftLeft',
    'AltLeft'
)
//caps с клавиатуры

document.addEventListener('keydown', function(event) {
    textArea.focus();
    if(event.code === 'CapsLock') {
        if (caps === 'off') {
            if (lang === 'en') {
                for (let i = 0; i < ALL_KEYS.length; i++) {
                    document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_BIG[i];
                }
            } else {
                for (let i = 0; i < ALL_KEYS.length; i++) {
                    document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_RUS_BIG[i];
                }
            }
            caps = 'on';
            localStorage.setItem('caps', 'on');
            document.querySelector('#key29').classList.add('caps_on');
        } else {
            if(lang === 'en') {
                for (let i = 0; i < ALL_KEYS.length; i++) {
                    document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS[i];
                }
            } else {
                for (let i = 0; i < ALL_KEYS.length; i++) {
                    document.querySelector(`#key${i}`).innerHTML =  ALL_KEYS_RUS[i];
                }
            }
            caps = 'off';
            localStorage.setItem('caps', 'off');
            document.querySelector('#key29').classList.remove('caps_on');
        }
    }
})

//анимация клавиш при нажатии с клавиатуры

document.addEventListener('keydown', (event) => {
    document.querySelector(`#key${ALL_KEYS_STRING.indexOf(event.code)}`).classList.add('key-active');
})

document.addEventListener('keyup', (event) => {
    const keyLink = document.querySelector(`#key${ALL_KEYS_STRING.indexOf(event.code)}`);
    if(event.keyCode !== 116) {
        document.querySelector(`#key${ALL_KEYS_STRING.indexOf(event.code)}`).classList.remove('key-active');
    }
    
})





//клавиша шифт виртуальная
document.addEventListener('mousedown', (event) => {
    textArea.focus();
    if(event.target.getAttribute('id') === 'key42' || event.target.getAttribute('id') === 'key54') {
        if(lang === 'en') {
            for (let i = 0; i <= 12; i++){
                document.querySelector(`#key${i}`).innerHTML = KEY_NUMBERS[i];
            }
            if(caps === 'off') {
                for (let i = 13; i <= 63; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_BIG[i];
                }
            } else {
                for (let i = 13; i <= 63; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS[i];
                }
            }
        } else {
            for (let i = 0; i <= 12; i++){
                document.querySelector(`#key${i}`).innerHTML = KEY_NUMBERS_RUS[i];
            }
            if(caps === 'off') {
                for (let i = 13; i <= 63; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS_BIG[i];
                }
            } else {
                for (let i = 13; i <= 63; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS[i];
                }
            }
        }
    }
})

document.addEventListener('mouseup', (event) => {
    textArea.focus();
        if(event.target.getAttribute('id', 'key42') || event.target.getAttribute('id', 'key54')) {
            if(lang === 'en') {
                for (let i = 0; i <= 12; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS[i];
                }
                if(caps === 'off') {
                    for (let i = 13; i <= 63; i++){
                        document.querySelector(`#key${i}`).innerHTML = ALL_KEYS[i];
                    }
                } else {
                    for (let i = 13; i <= 63; i++){
                        document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_BIG[i];
                    }
                }
            } else {
                for (let i = 0; i <= 12; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS[i];
                }
                if(caps === 'off') {
                    for (let i = 13; i <= 63; i++){
                        document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS[i];
                    }
                } else {
                    for (let i = 13; i <= 63; i++){
                        document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS_BIG[i];
                    }
                }
            }
        }
})



document.addEventListener('keydown', (event) => {
    textArea.focus();
    if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if(lang === 'en') {
            for (let i = 0; i <= 12; i++){
                document.querySelector(`#key${i}`).innerHTML = KEY_NUMBERS[i];
            }
            if(caps === 'off') {
                for (let i = 13; i <= 63; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_BIG[i];
                }
            } else {
                for (let i = 13; i <= 63; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS[i];
                }
            }
        } else {
            for (let i = 0; i <= 12; i++){
                document.querySelector(`#key${i}`).innerHTML = KEY_NUMBERS_RUS[i];
            }
            if(caps === 'off') {
                for (let i = 13; i <= 63; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS_BIG[i];
                }
            } else {
                for (let i = 13; i <= 63; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS[i];
                }
            }
        }
    }
})

document.addEventListener('keyup', (event) => {
    textArea.focus();
        if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            if(lang === 'en') {
                for (let i = 0; i <= 12; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS[i];
                }
                if(caps === 'off') {
                    for (let i = 13; i <= 63; i++){
                        document.querySelector(`#key${i}`).innerHTML = ALL_KEYS[i];
                    }
                } else {
                    for (let i = 13; i <= 63; i++){
                        document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_BIG[i];
                    }
                }
            } else {
                for (let i = 0; i <= 12; i++){
                    document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS[i];
                }
                if(caps === 'off') {
                    for (let i = 13; i <= 63; i++){
                        document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS[i];
                    }
                } else {
                    for (let i = 13; i <= 63; i++){
                        document.querySelector(`#key${i}`).innerHTML = ALL_KEYS_RUS_BIG[i];
                    }
                }
            }
        }
})


