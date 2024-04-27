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
<script src="./js/main.js"></script>