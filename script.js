let textContainer = document.createElement("textarea");
textContainer.className = "textarea";
textContainer.setAttribute("readonly", "readonly");

document.body.append(textContainer);


let keyContainer = document.createElement("div");
keyContainer.className = "keyboard";

document.body.append(keyContainer);


let keyLine1 = document.createElement("div");
keyLine1.className = "keyboard__line keyboard__line_1";

document.body.querySelector(".keyboard").append(keyLine1);

let keyLine2 = document.createElement("div");
keyLine2.className = "keyboard__line keyboard__line_2";

document.body.querySelector(".keyboard").append(keyLine2);

let keyLine3 = document.createElement("div");
keyLine3.className = "keyboard__line keyboard__line_3";

document.body.querySelector(".keyboard").append(keyLine3);

let keyLine4 = document.createElement("div");
keyLine4.className = "keyboard__line keyboard__line_4";

document.body.querySelector(".keyboard").append(keyLine4);

let keyLine5 = document.createElement("div");
keyLine5.className = "keyboard__line keyboard__line_5";

document.body.querySelector(".keyboard").append(keyLine5);


let firstLineArray = [
    button1 = {
        content: "`",
        addContent: "~",
        addClass: "darker",
        code: 'Backquote'
    },

    button2 = {
        content: "1",
        addContent: "!",
        code: 'Digit1'
    },

    button3 = {
        content: "2",
        addContent: "@",
        code: 'Digit2'
    },

    button4 = {
        content: "3",
        addContent: "#",
        code: 'Digit3'
    },

    button5 = {
        content: "4",
        addContent: "$",
        code: 'Digit4'
    },

    button6 = {
        content: "5",
        addContent: "%",
        code: 'Digit5'
    },

    button7 = {
        content: "6",
        addContent: "^",
        code: 'Digit6'
    },

    button8 = {
        content: "7",
        addContent: "&",
        code: 'Digit7'
    },

    button9 = {
        content: "8",
        addContent: "*",
        code: 'Digit8'
    },

    button10 = {
        content: "9",
        addContent: "(",
        code: 'Digit9'
    },

    button11 = {
        content: "0",
        addContent: ")",
        code: 'Digit0'
    },

    button12 = {
        content: "-",
        addContent: "_",
        code: 'Minus'
    },

    button13 = {
        content: "=",
        addContent: "+",
        code: 'Equal'
    },

    button14 = {
        content: "Backspace",
        addClass: "darker",
        code: 'Backspace'
    },
];

for (let i = 0; i < firstLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = firstLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    key.classList.add(`${firstLineArray[i].code}`);
    if (firstLineArray[i].addContent) {
        keyS.innerHTML = firstLineArray[i].addContent;
    }
    if (firstLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark");
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_1").append(key);
}

let secondLineArray = [
    button1 = {
        content: "Tab",
        addClass: "darker",
        code: 'Tab'
    },

    button2 = {
        content: "q",
        addContent: "Q",
        code: 'KeyQ'
    },

    button3 = {
        content: "w",
        addContent: "W",
        code: 'KeyW'
    },

    button4 = {
        content: "e",
        addContent: "E",
        code: 'KeyE'
    },

    button5 = {
        content: "r",
        addContent: "R",
        code: 'KeyR'
    },

    button6 = {
        content: "t",
        addContent: "T",
        code: 'KeyT'
    },

    button7 = {
        content: "y",
        addContent: "Y",
        code: 'KeyY'
    },

    button8 = {
        content: "u",
        addContent: "U",
        code: 'KeyU'
    },

    button9 = {
        content: "i",
        addContent: "I",
        code: 'KeyI'
    },

    button10 = {
        content: "o",
        addContent: "O",
        code: 'KeyO'
    },

    button11 = {
        content: "p",
        addContent: "P",
        code: 'KeyP'
    },

    button12 = {
        content: "[",
        addContent: "{",
        code: 'BracketLeft'
    },

    button13 = {
        content: "]",
        addContent: "}",
        code: 'BracketRight'
    },

    button14 = {
        content: "\\",
        addContent: "/",
        code: 'Backslash'
    },

    button15 = {
        content: "DEL",
        addClass: "darker",
        code: "Delete"
    },
];

for (let i = 0; i < secondLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = secondLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    key.classList.add(`${secondLineArray[i].code}`);
    if (secondLineArray[i].addContent) {
        keyS.innerHTML = secondLineArray[i].addContent;
    }
    if (secondLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark");
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_2").append(key);
}

let thirdLineArray = [
    button1 = {
        content: "Caps Lock",
        addClass: "darker",
        code: "CapsLock"
    },

    button2 = {
        content: "a",
        addContent: "A",
        code: 'KeyA'
    },

    button3 = {
        content: "s",
        addContent: "S",
        code: 'KeyS'
    },

    button4 = {
        content: "d",
        addContent: "D",
        code: 'KeyD'
    },

    button5 = {
        content: "f",
        addContent: "F",
        code: 'KeyF'
    },

    button6 = {
        content: "g",
        addContent: "G",
        code: 'KeyG'
    },

    button7 = {
        content: "h",
        addContent: "H",
        code: 'KeyH'
    },

    button8 = {
        content: "j",
        addContent: "J",
        code: 'KeyJ'
    },

    button9 = {
        content: "k",
        addContent: "K",
        code: 'KeyK'
    },

    button10 = {
        content: "l",
        addContent: "L",
        code: 'KeyL'
    },

    button11 = {
        content: ";",
        addContent: ":",
        code: 'Semicolon'
    },

    button12 = {
        content: "'",
        addContent: "\"",
        code: 'Quote'
    },

    button13 = {
        content: "ENTER",
        addClass: "darker",
        code: 'Enter'
    },
];

for (let i = 0; i < thirdLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = thirdLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    key.classList.add(`${thirdLineArray[i].code}`);
    if (thirdLineArray[i].addContent) {
        keyS.innerHTML = thirdLineArray[i].addContent;
    }
    if (thirdLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark");
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_3").append(key);
}

let fourthLineArray = [
    button1 = {
        content: "Shift",
        addClass: "darker",
        code: "ShiftLeft"
    },

    button2 = {
        content: "\\",
        addContent: "|",
        code: 'IntlBackslash'
    },

    button3 = {
        content: "z",
        addContent: "Z",
        code: 'KeyZ'
    },

    button4 = {
        content: "x",
        addContent: "X",
        code: 'KeyX'
    },

    button5 = {
        content: "c",
        addContent: "C",
        code: 'KeyC'
    },

    button6 = {
        content: "v",
        addContent: "V",
        code: 'KeyV'
    },

    button7 = {
        content: "b",
        addContent: "B",
        code: 'KeyB'
    },

    button8 = {
        content: "n",
        addContent: "N",
        code: 'KeyN'
    },

    button9 = {
        content: "m",
        addContent: "M",
        code: 'KeyM'
    },

    button10 = {
        content: ",",
        addContent: "<",
        code: 'Comma'
    },

    button11 = {
        content: ".",
        addContent: ">",
        code: 'Period'
    },

    button12 = {
        content: "/",
        addContent: "?",
        code: 'Slash'
    },

    button13 = {
        content: "↑",
        addClass: "darker",
        code: "ArrowUp"
    },

    button14 = {
        content: "Shift",
        addClass: "darker",
        code: "ShiftRight"
    },
];

for (let i = 0; i < fourthLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = fourthLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    key.classList.add(`${fourthLineArray[i].code}`);
    if (fourthLineArray[i].addContent) {
        keyS.innerHTML = fourthLineArray[i].addContent;
    }
    if (fourthLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark");
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_4").append(key);
}

let fifthLineArray = [
    button1 = {
        content: "Ctrl",
        addClass: "darker",
        code: "ControlLeft"
    },

    button2 = {
        content: "Win",
        addClass: "darker",
        code: "MetaLeft"
    },

    button3 = {
        content: "Alt",
        addClass: "darker",
        code: "AltLeft"
    },

    button4 = {
        content: " ",
        code: 'Space'
    },

    button5 = {
        content: "Alt",
        addClass: "darker",
        code: 'AltRight'
    },

    button6 = {
        content: "Ctrl",
        addClass: "darker",
        code: "ControlRight"
    },

    button7 = {
        content: "←",
        addClass: "darker",
        code: "ArrowLeft"
    },

    button8 = {
        content: "↓",
        addClass: "darker",
        code: "ArrowDown"
    },

    button9 = {
        content: "→",
        addClass: "darker",
        code: "ArrowRight"
    },
];

for (let i = 0; i < fifthLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = fifthLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    key.classList.add(`${fifthLineArray[i].code}`);
    if (fifthLineArray[i].addContent) {
        keyS.innerHTML = fifthLineArray[i].addContent;
    }
    if (fifthLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark");
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_5").append(key);
}

document.addEventListener('keydown', function (whatKey) {
    for (let step of [...firstLineArray, ...secondLineArray, ...thirdLineArray, ...fourthLineArray, ...fifthLineArray]) {
        if (whatKey.code === step.code) {
            document.querySelector(`.${step.code}`).classList.add('active');
            if (step.content.length === 1) {
                document.querySelector(".textarea").innerHTML += step.content;
            } else {
                if (whatKey.code === "Backspace") {
                    let cur = document.querySelector(".textarea").innerHTML.split('');
                    cur.pop();
                    document.querySelector(".textarea").innerHTML = cur.join('');
                }
                if (step.code === 'Enter') {
                    let cur = document.querySelector(".textarea").innerHTML += '\n';
                }
            }
        }
    }
})

document.addEventListener('keyup', function (whatKey) {
    for (let step of [...firstLineArray, ...secondLineArray, ...thirdLineArray, ...fourthLineArray, ...fifthLineArray]) {
        if (whatKey.code === step.code) {
            document.querySelector(`.${step.code}`).classList.remove('active');
        }
    }
})


for (let step of [...firstLineArray, ...secondLineArray, ...thirdLineArray, ...fourthLineArray, ...fifthLineArray]) {
    document.querySelector(`.${step.code}`).addEventListener('mousedown', () => {
        document.querySelector(`.${step.code}`).classList.add('active');
        if (step.content.length === 1) {
            document.querySelector(".textarea").innerHTML += step.content;
        } else {
            if (step.code === "Backspace") {
                let cur = document.querySelector(".textarea").innerHTML.split('');
                cur.pop();
                document.querySelector(".textarea").innerHTML = cur.join('');
            }
            if (step.code === 'Enter') {
                let cur = document.querySelector(".textarea").innerHTML += '\n';
            }
        }
    })
}

for (let step of [...firstLineArray, ...secondLineArray, ...thirdLineArray, ...fourthLineArray, ...fifthLineArray]) {
    document.querySelector(`.${step.code}`).addEventListener('mouseup', () => {
        document.querySelector(`.${step.code}`).classList.remove('active');
    })
}