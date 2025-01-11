---
title: Royal Game of Ur Online
short_description: An online website for the Royal Game of Ur, a 4500-year-old board game!
tag: Online Web Game
action_button_text: I want to play!
action_button_link: https://ur.whnet.ca/
tags: ["highlight"]
eleventyComputed:
    img: "{{ '/' | url }}_assets/img/full_board.jpg"
---

{%- from 'macro.link.njk' import link -%}

This project, born in summer 2017 and completely redesigned in winter 2021, is a web adaptation of the fascinating {{link("Royal Game of Ur", "https://en.wikipedia.org/wiki/Royal_Game_of_Ur")}}, one of the oldest known board games in the world. Inspired by a {{link("discovery on YouTube", "https://www.youtube.com/watch?v=WZskjLq040I")}}, this project has become a true passion that has allowed me to make this ancient game accessible to a contemporary audience.

This online gaming platform allows you to:
- Play against friends online
- Practice against artificial intelligence

Developed entirely using modern web technologies (PHP, MariaDB, jQuery, and CSS), this project represents a perfect balance between history and technology.

The {{link("source code is available", "https://github.com/qwertyuu/the_royal_game_of_ur")}} for development enthusiasts who wish to explore or contribute to the project.