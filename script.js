let textContainer = document.createElement("textarea");
textContainer.className = "textarea";

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
        addClass: "darker"
    },

    button2 = {
        content: "1",
        addContent: "!",
    },

    button3 = {
        content: "2",
        addContent: "@",
    },

    button4 = {
        content: "3",
        addContent: "#",
    },

    button5 = {
        content: "4",
        addContent: "$",
    },

    button6 = {
        content: "5",
        addContent: "%",
    },

    button7 = {
        content: "6",
        addContent: "^",
    },

    button8 = {
        content: "7",
        addContent: "&",
    },

    button9 = {
        content: "8",
        addContent: "*",
    },

    button10 = {
        content: "9",
        addContent: "(",
    },

    button11 = {
        content: "0",
        addContent: ")",
    },

    button12 = {
        content: "-",
        addContent: "_",
    },

    button13 = {
        content: "=",
        addContent: "+",
    },

    button14 = {
        content: "Backspace",
        addClass: "darker",
    },
];

for (let i = 0; i < firstLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = firstLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    if (firstLineArray[i].addContent) {
        keyS.innerHTML = firstLineArray[i].addContent;
    }
    if (firstLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark")
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_1").append(key);
}

let secondLineArray = [
    button1 = {
        content: "Tab",
        addClass: "darker"
    },

    button2 = {
        content: "q",
        addContent: "Q",
    },

    button3 = {
        content: "w",
        addContent: "W",
    },

    button4 = {
        content: "e",
        addContent: "E",
    },

    button5 = {
        content: "r",
        addContent: "R",
    },

    button6 = {
        content: "t",
        addContent: "T",
    },

    button7 = {
        content: "y",
        addContent: "Y",
    },

    button8 = {
        content: "u",
        addContent: "U",
    },

    button9 = {
        content: "i",
        addContent: "I",
    },

    button10 = {
        content: "o",
        addContent: "O",
    },

    button11 = {
        content: "p",
        addContent: "P",
    },

    button12 = {
        content: "[",
        addContent: "{",
    },

    button13 = {
        content: "]",
        addContent: "}",
    },

    button14 = {
        content: "\\",
        addContent: "/",
    },

    button15 = {
        content: "DEL",
        addClass: "darker",
    },
];

for (let i = 0; i < secondLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = secondLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    if (secondLineArray[i].addContent) {
        keyS.innerHTML = secondLineArray[i].addContent;
    }
    if (secondLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark")
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_2").append(key);
}

let thirdLineArray = [
    button1 = {
        content: "Caps Lock",
        addClass: "darker"
    },

    button2 = {
        content: "a",
        addContent: "A",
    },

    button3 = {
        content: "s",
        addContent: "S",
    },

    button4 = {
        content: "d",
        addContent: "D",
    },

    button5 = {
        content: "f",
        addContent: "F",
    },

    button6 = {
        content: "g",
        addContent: "G",
    },

    button7 = {
        content: "h",
        addContent: "H",
    },

    button8 = {
        content: "j",
        addContent: "J",
    },

    button9 = {
        content: "k",
        addContent: "K",
    },

    button10 = {
        content: "l",
        addContent: "L",
    },

    button11 = {
        content: ";",
        addContent: ":",
    },

    button12 = {
        content: "'",
        addContent: "\"",
    },

    button13 = {
        content: "ENTER",
        addClass: "darker"
    },
];

for (let i = 0; i < thirdLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = thirdLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    if (thirdLineArray[i].addContent) {
        keyS.innerHTML = thirdLineArray[i].addContent;
    }
    if (thirdLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark")
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_3").append(key);
}

let fourthLineArray = [
    button1 = {
        content: "Shift",
        addClass: "darker"
    },

    button2 = {
        content: "\\",
        addContent: "|",
    },

    button3 = {
        content: "z",
        addContent: "Z",
    },

    button4 = {
        content: "x",
        addContent: "X",
    },

    button5 = {
        content: "c",
        addContent: "C",
    },

    button6 = {
        content: "v",
        addContent: "V",
    },

    button7 = {
        content: "b",
        addContent: "B",
    },

    button8 = {
        content: "n",
        addContent: "N",
    },

    button9 = {
        content: "m",
        addContent: "M",
    },

    button10 = {
        content: ",",
        addContent: "<",
    },

    button11 = {
        content: ".",
        addContent: ">",
    },

    button12 = {
        content: "/",
        addContent: "?",
    },

    button13 = {
        content: "↑",
        addClass: "darker"
    },

    button14 = {
        content: "Shift",
        addClass: "darker"
    },
];

for (let i = 0; i < fourthLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = fourthLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    if (fourthLineArray[i].addContent) {
        keyS.innerHTML = fourthLineArray[i].addContent;
    }
    if (fourthLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark")
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_4").append(key);
}

let fifthLineArray = [
    button1 = {
        content: "Ctrl",
        addClass: "darker"
    },

    button2 = {
        content: "Win",
        addClass: "darker"
    },

    button3 = {
        content: "Alt",
        addClass: "darker"
    },

    button4 = {
        content: " ",
    },

    button5 = {
        content: "Alt",
        addClass: "darker"
    },

    button6 = {
        content: "Ctrl",
        addClass: "darker"
    },

    button7 = {
        content: "←",
        addClass: "darker"
    },

    button8 = {
        content: "↓",
        addClass: "darker"
    },

    button9 = {
        content: "→",
        addClass: "darker"
    },
];

for (let i = 0; i < fifthLineArray.length; i++) {
    let key = document.createElement("div");
    key.className = "keyboard__line__key";
    key.innerHTML = fifthLineArray[i].content;

    let keyS = document.createElement("div");
    keyS.className = "keyboard__line__key_second";
    if (fifthLineArray[i].addContent) {
        keyS.innerHTML = fifthLineArray[i].addContent;
    }
    if (fifthLineArray[i].addClass) {
        key.classList.add("keyboard__line__key_dark")
    }
    key.append(keyS);

    document.querySelector(".keyboard__line_5").append(key);
}