---
layout: 'layouts/default.njk'
title: Enchanté!
---

{%- from 'macro.button.njk' import button -%}
{%- from 'macro.dialog.njk' import dialog -%}
{%- from 'macro.heading.njk' import heading -%}
{%- from 'macro.list.njk' import list, listItem -%}


<article class="{{ site.prose }}">
  <div class="mx-auto max-w-xl lg:gap-16 lg:grid lg:max-w-none lg:grid-cols-2">
    <aside class="lg:order-last">
      <figure class="mx-auto max-w-4xl">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQErpo1scZTBBg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731865418672?e=1741824000&v=beta&t=O-J1V-ARzMC7xXHXGuUDBqD6WO8Q4S1PGNZonSMm7v0" alt="Royal Game of Ur Online photo" class="h-100 w-full object-center object-cover rounded-2xl">
      </figure>
    </aside>
    <article>


### Raphaël Côté, Passionné Techno & Leader en IA

Je suis constamment à l'affût des nouvelles frontières technologiques à explorer. Mon voyage dans le monde de la tech reflète cette curiosité insatiable - des systèmes d'exploitation aux algorithmes génétiques, en passant par l'IA et la science des données.

Avec plus de 10 ans d'expérience en développement, j'ai concrétisé ma passion à travers des projets novateurs. Je dirige la principale communauté de recherche sur le jeu royal d'UR, où j'ai rendu accessible pour la première fois une IA jouable basée sur des recherches académiques. 

**Engagé dans ma communauté**, j'ai fondé BorIA, la première communauté d'IA et d'innovation technologique au Saguenay-Lac-Saint-Jean, avec la mission de développer et partager les connaissances en intelligence artificielle dans la région.

Mon expertise technique s'accompagne d'une approche humaine et d'une touche d'humour.

Toujours en quête du prochain défi, je cherche à mettre mes compétences au service de projets qui ont un impact positif concret.

[Venez me parler! TODO: ADD CONTACT PAGE](/)


</article>
</div>

</article>
{{ heading({slot: "Vitrine des projets", divider: true}) }}


<div class="pt-3 flex items-end justify-between">
  <div class="text-l">Voici les projets dont je suis particulièrement fier.</div>
  <a href="{{ "/projects" | locale_url }}" class="text-(lg sec-600) leading-tight font-semibold inline-block [&:after]:(w-full h-0.5 bg-current block opacity-50 scale-0 motion-safe:(transition) content-['']) [&:hover:after,&:focus:after]:(scale-100)"><strong class="text-l">Tous mes projets <iconify-icon icon="mdi:arrow-right" inline="false" class="iconify text-xl"></iconify-icon></strong></a>
</div>
{%- set projects -%}
{%- for item in collections.highlight | current_locale_content -%}
{%- set current_project -%}
<div class="group mt-10 w-full h-full bg-white relative rounded-lg shadow-lg dark:(bg-pri-500/5)">
  <figure>
    <img src="{{ item.data.img }}" alt="{{ item.data.title }} photo" class="w-full h-48 object-(cover center) rounded-t-lg motion-safe:(transition-all)" />
    <figcaption class="p-6 space-y-1">
      <a href="{{ item.url | url }}" class="text-(lg pri-600) leading-tight font-semibold inline-block [&:after]:(w-full h-0.5 bg-current block opacity-50 scale-0 motion-safe:(transition) content-['']) [&:hover:after,&:focus:after]:(scale-100)">
        {{ item.data.title }}
        <span class="absolute inset-0 rounded-lg motion-safe:(transition) group-hover:(ring-(& pri-600/50))" aria-hidden="true"></span>
      </a>
      <div class="line-clamp-2 text-sm">{{ item.data.short_description | safe }}</div>
      <div class="pt-3 flex items-end justify-between">
        <strong class="text-l">{{ item.data.tag }}</strong>
        <iconify-icon icon="mdi:arrow-right" inline="false" class="iconify text-xl"></iconify-icon>
      </div>
    </figcaption>
  </figure>
</div>
{%- endset -%}
{{ listItem({slot: current_project}) }}
{%- endfor -%}
{%- endset -%}

{{- list({slot: projects}) -}}