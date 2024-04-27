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
    "URL": {
        encode: text => encodeURI(text),
        decode: text => decodeURI(text)
    },
    "URL (component)": {
        encode: text => encodeURIComponent(text),
        decode: text => decodeURIComponent(text)
    }
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