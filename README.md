# [https://raphaelcote.com/](https://raphaelcote.com/)

Mon site web personnel - un portfolio


commande pour développer le site: `npx @11ty/eleventy --serve`

Lorsque je pousse sur `main`, un build github action est lancé et pousse sur la branche `gh-pages` qui ensuite pousse le site en prod.

# Conversion markdown to link

import: `{%- from 'macro.link.njk' import link -%}`

Regex: `\[([^\]]+)\]\(([^\)]+)\)`
Replace: `{{ link("$1", "$2") }}`