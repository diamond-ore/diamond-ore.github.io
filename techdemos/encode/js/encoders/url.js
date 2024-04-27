function encodeURIAggressive(text) {
    var encoded_text = "";

    const characters = encodeURI(text).split(/(%\w\w)/g).filter(t => t !== "");
    for (const i in characters) {
        let c = characters[i]
        if (c.startsWith("%")) {
            encoded_text += c;
        }
        else {
            encoded_text += "%" + c.split("").map(t => t.charCodeAt(0).toString(16).padStart(2, "0")).join("%").toUpperCase();
        }
    }

    return encoded_text;
}

function encodeURINonDestructive(text) {
    var encoded_text = encodeURIAggressive(text);

    if (encoded_text.includes("%3A%2F%2F")) {
        encoded_text = encoded_text.replace("%3A%2F%2F", "://");
        const protocol = decodeURI(encoded_text.split("://")[0])
        encoded_text = protocol + "://" + encoded_text.split("://")[1];
    }
    
    encoded_text = encoded_text.replaceAll("%2F", "/").replaceAll("%3F", "?").replaceAll("%26", "&").replaceAll("%2B", "+").replaceAll("%3D", "=");

    return encoded_text;
}

function decodeURINonDestructive(text) {
    if (text.includes("://")) {
        const protocol = encodeURIAggressive(text.split("://")[0]);
        text = protocol + "%3A%2F%2F" + text.split("://")[1];
    }
    
    text = text.replaceAll("/", "%2F").replaceAll("?", "%3F").replaceAll("&", "%26").replaceAll("+", "%2B").replaceAll("=", "%3D");

    return decodeURIComponent(decodeURI(text));
}

export {encodeURIAggressive, encodeURINonDestructive, decodeURINonDestructive}