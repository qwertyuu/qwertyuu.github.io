---
layout: 'layouts/default.njk'
title: Projects
eleventyNavigation:
  order: 0
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
---

{%- from 'macro.list.njk' import list, listItem -%}

{%- set projects -%}
{%- for item in collections.project | current_locale_content -%}
{%- set current_project -%}
<div class="group w-full h-full bg-white relative rounded-lg shadow-lg dark:(bg-pri-500/5)">
  <figure>
    <img src="{{ item.data.img }}" alt="{{ item.data.title }} photo" class="w-full h-full object-(cover center) rounded-t-lg motion-safe:(transition-all)" />
    <figcaption class="p-6 space-y-1">
      <a href="{{ item.url | url }}" class="text-(lg pri-600) leading-tight font-semibold inline-block [&:after]:(w-full h-0.5 bg-current block opacity-50 scale-0 motion-safe:(transition) content-['']) [&:hover:after,&:focus:after]:(scale-100)">
        {{ item.data.title }}
        <span class="absolute inset-0 rounded-lg motion-safe:(transition) group-hover:(ring-(& pri-600/50))" aria-hidden="true"></span>
      </a>
      <div class="line-clamp-2 text-sm">{{ item.data.short_description | safe }}</div>
      <div class="pt-3 flex items-end justify-between">
        <strong class="text-l">{{ item.data.tag }}</strong>
        <iconify-icon icon="mdi:arrow-right" inline="false" class="iconify text-xl" noobserver></iconify-icon>
      </div>
    </figcaption>
  </figure>
</div>
{%- endset -%}
{{ listItem({slot: current_project}) }}
{%- endfor -%}
{%- endset -%}

{{- list({slot: projects}) -}}