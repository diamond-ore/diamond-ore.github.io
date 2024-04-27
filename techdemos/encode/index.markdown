---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Encoder/Decoder
---
#### Input
<textarea id="inputText" rows="10" class="panel" spellcheck="false" style="resize:none; width:100%;"></textarea>

#### Options
Mode:
<select name="mode" id="mode" style="width: 100%">
</select>

<button id="encode" style="width: calc(50% - 2px);">Encode</button>
<button id="decode" style="width: calc(50% - 2px);">Decode</button>
<input type="checkbox" id="livemode" name="livemode">
<label for="livemode"> Live mode</label><br>

#### Output
<textarea id="outputText" rows="10" class="panel" spellcheck="false" style="resize:none; width:100%;"></textarea>

<!-- Encode/Decode -->
<script type="text/javascript">
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
</script>