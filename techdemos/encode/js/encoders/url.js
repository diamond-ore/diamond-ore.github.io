const encodeURIAggressive = text => "%" + text.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join("%").toUpperCase();
const decodeURIAggressive = text => text.split("%").filter(p => !!p).map(c => String.fromCharCode(parseInt(c, 16))).join("");

function encodeURINonDestructive(text) {
    var encoded_text = encodeURIAggressive(text);

    if (encoded_text.includes("%3A%2F%2F")) {
        encoded_text = encoded_text.replace("%3A%2F%2F", "://");
        const protocol = decodeURIAggressive(encoded_text.split("://")[0])
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

    return decodeURIAggressive(text);
}

export {encodeURIAggressive, decodeURIAggressive, encodeURINonDestructive, decodeURINonDestructive}