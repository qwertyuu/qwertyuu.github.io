---
layout: 'layouts/default.njk'
title: Enchanté!
---

{%- from 'macro.button.njk' import button -%}
{%- from 'macro.dialog.njk' import dialog -%}
{%- from 'macro.heading.njk' import heading -%}
{%- from 'macro.listing.njk' import full_listing -%}


<article class="{{ site.prose }}">
  <div class="mx-auto max-w-xl lg:gap-16 lg:grid lg:max-w-none lg:grid-cols-2">
    <aside class="lg:order-last mb-5">
      <figure class="mx-auto max-w-4xl">
        <img src="{{ '/' | url }}_assets/img/linkedin-profile.jpg" alt="Photo de profil de Raphaël Côté" class="h-100 w-full object-center object-cover rounded-2xl">
      </figure>
    </aside>
    <article>


### Raphaël Côté, Passionné Techno & Leader en IA

Je suis constamment à l'affût des nouvelles frontières technologiques à explorer. Mon voyage dans le monde de la tech reflète cette curiosité insatiable - des systèmes d'exploitation aux algorithmes génétiques, en passant par l'IA et la science des données.

Avec plus de 10 ans d'expérience en développement, j'ai concrétisé ma passion à travers des projets novateurs. Je dirige la principale communauté de recherche sur le jeu royal d'UR, où j'ai rendu accessible pour la première fois une IA jouable basée sur des recherches académiques. 

**Engagé dans ma communauté**, j'ai fondé BorIA, la première communauté d'IA et d'innovation technologique au Saguenay-Lac-Saint-Jean, avec la mission de développer et partager les connaissances en intelligence artificielle et autres technologies émergentes dans la région. [Plus de détails sur BorIA ici]({{ "/projects/boria" | locale_url }})!

Mon expertise technique s'accompagne d'une approche humaine et d'une touche d'humour.

Toujours en quête du prochain défi, je cherche à mettre mes compétences au service de projets qui ont un impact positif concret.

[Venez me parler!]({{ "/contact" | locale_url }})


</article>
</div>

</article>
{{ heading({slot: "Vitrine des projets", divider: true}) }}


<div class="pt-3 flex items-end justify-between">
  <div class="text-l">Voici les projets dont je suis particulièrement fier.</div>
  <a href="{{ "/projects" | locale_url }}" class="text-(lg sec-600) leading-tight font-semibold inline-block [&:after]:(w-full h-0.5 bg-current block opacity-50 scale-0 motion-safe:(transition) content-['']) [&:hover:after,&:focus:after]:(scale-100)"><strong class="text-l">Tous mes projets <iconify-icon icon="mdi:arrow-right" inline="false" class="iconify text-xl" noobserver></iconify-icon></strong></a>
</div>
{{ full_listing({list: collections.highlight | current_locale_content}) }}