---
layout: page
title: "Colofón"
prioridad: 10
---

<div id="img-home"></div>

Sitio construido usando [Jekyll](https://jekyllrb.com){:target="_blank"}, [Ruby](https://www.ruby-lang.org){:target="_blank"}, [RubyGems](https://rubygems.org/pages/download){:target="_blank"}, [Node.js](https://nodejs.org){:target="_blank"}, HTML, CSS y Markdown.  
Hosteado en [Nearly Free Speech](http://www.nearlyfreespeech.com){:target="_blank"} y desarrollado en [GitHub](https://github.com){:target="_blank"}.

Este sitio fue compilado por última vez {{ site.time }}.

<script>
var images=["home_brothers.jpg","home_farn.jpg","home_road.jpg"];
$('<img class="fade-in" src="{{ site.baseurl }}/img/ui/'+images[Math.floor(Math.random()*images.length)]+'">').appendTo("#img-home");
</script>
