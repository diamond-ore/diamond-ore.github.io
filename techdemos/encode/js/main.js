const mode = document.getElementById("mode");
const encode = document.getElementById("encode");
const decode = document.getElementById("decode");
const livemode = document.getElementById("livemode");
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");
const codes = {
    "Base64": {
        encode: text => btoa(text),
        decode: text => atob(text)
    },
    "Base16 (Hexadecimal)": {
        encode: text => text.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join("").toUpperCase(),
        decode: text => text.split(/(\w\w)/g).filter(p => !!p).map(c => String.fromCharCode(parseInt(c, 16))).join("")
    },
    "Base2 (Binary)": {
        encode: text => text.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" "),
        decode: text => text.split(" ").filter(p => !!p).map(c => String.fromCharCode(parseInt(c, 2))).join("")
    },
    "URL": {
        encode: text => encodeURI(text),
        decode: text => decodeURI(text)
    },
    "URL (component)": {
        encode: text => encodeURIComponent(text),
        decode: text => decodeURIComponent(text)
    },
    "URL (aggressive)": {
        encode: text => "%" + text.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join("%").toUpperCase(),
        decode: text => text.split("%").filter(p => !!p).map(c => String.fromCharCode(parseInt(c, 16))).join("")
    },
}
for (const code in codes) {
    let element = document.createElement("option");
    element.value = code;
    element.innerText = code;
    mode.appendChild(element);
}
encode.addEventListener("click", () => {
    output.value = codes[mode.value].encode(input.value);
});
decode.addEventListener("click", () => {
    input.value = codes[mode.value].decode(output.value);
});
input.addEventListener("input", () => {
    if (livemode.checked) {
        output.value = codes[mode.value].encode(input.value);
    }
});
output.addEventListener("input", () => {
    if (livemode.checked) {
        input.value = codes[mode.value].decode(output.value);
    }
});