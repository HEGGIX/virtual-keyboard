const keyContainer = document.createElement("div");
const keyboard = document.createElement("div");
const body = document.getElementById("body");
keyboard.classList.add("keyboard");
keyContainer.classList.add("keyboard__cont");
document.body.appendChild(keyContainer);
document.body.appendChild(keyboard);


const keyArrEng = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "shift",
    "ctrl", "alt", "space" ,"alt" , "ctrl"
];

const keyArrRus = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
    "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "enter",
    "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "?", "shift",
    "ctrl", "alt", "space" ,"alt" , "ctrl"
];