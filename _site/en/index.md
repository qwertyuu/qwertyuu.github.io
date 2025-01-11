---
layout: 'layouts/default.njk'
title: Nice to meet you!
---

{%- from 'macro.button.njk' import button -%}
{%- from 'macro.dialog.njk' import dialog -%}
{%- from 'macro.heading.njk' import heading -%}
{%- from 'macro.listing.njk' import full_listing -%}


<article class="{{ site.prose }}">
  <div class="mx-auto max-w-xl lg:gap-16 lg:grid lg:max-w-none lg:grid-cols-2">
    <aside class="lg:order-last">
      <figure class="mx-auto max-w-4xl">
        <img src="{{ '/' | url }}_assets/img/linkedin-profile.jpg" alt="Profile picture of Raphaël Côté" class="h-100 w-full object-center object-cover rounded-2xl">
      </figure>
    </aside>
    <article>


### Raphaël Côté, Tech Enthusiast & AI Leader

I'm constantly on the lookout for new technological frontiers to explore. My journey in the tech world reflects this insatiable curiosity - from operating systems to genetic algorithms, AI, and data science.

With over 10 years of development experience, I've brought my passion to life through innovative projects. I lead the main research community on the Royal Game of UR, where I made AI gameplay based on academic research accessible for the first time.

**Engaged in my community**, I founded BorIA, the first AI and technological innovation community in Saguenay-Lac-Saint-Jean, with the mission to develop and share knowledge in artificial intelligence and other emerging technologies in the region. [More details about BorIA here]({{ "/projects/boria" | locale_url }})!

My technical expertise comes with a human approach and a touch of humor.

Always seeking the next challenge, I aim to put my skills to use in projects that have a concrete positive impact.

[Let's talk!]({{ "/contact" | locale_url }})


</article>
</div>

</article>
{{ heading({slot: "Project Showcase", divider: true}) }}


<div class="pt-3 flex items-end justify-between">
  <div class="text-l">Here are the projects I'm particularly proud of.</div>
  <a href="{{ "/projects" | locale_url }}" class="text-(lg sec-600) leading-tight font-semibold inline-block [&:after]:(w-full h-0.5 bg-current block opacity-50 scale-0 motion-safe:(transition) content-['']) [&:hover:after,&:focus:after]:(scale-100)"><strong class="text-l">All my projects <iconify-icon icon="mdi:arrow-right" inline="false" class="iconify text-xl" noobserver></iconify-icon></strong></a>
</div>
{{ full_listing({list: collections.highlight | current_locale_content}) }}