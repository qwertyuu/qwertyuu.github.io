---
title: Jeu Royal d'Ur en ligne
short_description: Un site Internet du Jeu Royal d'Ur en ligne, un jeu de société vieux de 4500 ans!
tag: Jeu web en ligne
action_button_text: Je veux jouer!
action_button_link: https://ur.whnet.ca/
tags: ["highlight"]
eleventyComputed:
    img: "{{ '/' | url }}_assets/img/full_board.jpg"
---

{%- from 'macro.link.njk' import link -%}

Ce projet, né à l'été 2017 et entièrement remanié à l'hiver 2021, est une adaptation web du fascinant {{link("Jeu Royal d'Ur", "https://en.wikipedia.org/wiki/Royal_Game_of_Ur")}}, l'un des plus anciens jeux de plateau connus au monde. Inspiré par une {{link("découverte sur YouTube", "https://www.youtube.com/watch?v=WZskjLq040I")}}, ce projet est devenu une véritable passion qui m'a permis de rendre accessible ce jeu millénaire à un public contemporain.

Cette plateforme de jeu en ligne vous permet de :
- Jouer contre des amis en ligne
- Vous entraîner contre l'intelligence artificielle

Développé intégralement en utilisant des technologies web modernes (PHP, MariaDB, jQuery et CSS), ce projet représente un parfait équilibre entre histoire et technologie.

Le {{link("code source est disponible", "https://github.com/qwertyuu/the_royal_game_of_ur")}} pour les passionnés de développement souhaitant explorer ou contribuer au projet. J'ai aussi contribué au monde [de la recherche scientifique]({{ '/projects/ur-research' | locale_url }}) avec ce projet.