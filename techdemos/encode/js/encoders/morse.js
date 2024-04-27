var morse = {".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...", ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-", "\"": ".-..-.", "$": "...-..-", "!": "-.-.--", "@": ".--.-.", " ": "/", "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----"};

function encodeMorse(text) {
    text = text.toLowerCase();

    for (const [key, value] of Object.entries(morse)) {
        text = text.replaceAll(key, value + " ");
    }

    text = text.substring(0, text.length - 1);

    return text;
}

function decodeMorse(code) {
    var text = ""

    for (const sequence of code.split(" ")) {
        for (const [key, value] of Object.entries(morse)) {
            if (sequence == value) { 
                text += key;
            }
        }
    }

    return text;
}

export {encodeMorse, decodeMorse}