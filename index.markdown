---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Welcome!
layout: default
---
# {{ page.title | default: site.title }}

<div id="post-list" class="flex-grow-1 px-xl-1">
  <article class="card-wrapper card">
    <a href="/techdemos" class="post-preview row g-0 flex-md-row-reverse">
      {% assign card_body_col = '12' %}
      <div class="col-md-{{ card_body_col }}">
        <div class="card-body d-flex flex-column">
          <h1 class="card-title my-2 mt-md-0">Tech Demos</h1>
          <div class="card-text content mt-0 mb-3">
            <p>Try various tech demos</p>
          </div>
        </div>
      </div>
    </a>
  </article>
</div>