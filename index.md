---
layout: page-alt
title: Bienvenidos
---

<div id="img-home"></div>

<script>
var images=["home_brothers.jpg","home_farn.jpg","home_road.jpg"];
$('<img class="fade-in" src="{{ site.baseurl }}/img/ui/'+images[Math.floor(Math.random()*images.length)]+'">').appendTo("#img-home");
</script>
