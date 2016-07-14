---
layout: page
title: "Contacto"
prioridad: 15
---

<div class="contacto">
  <form action="https://formspree.io/info@augustodaniele.com.ar" method="POST">
    <input type="text" name="Nombre" placeholder="Full Name" />
    <input type="email" name="_replyto" placeholder="Email" />
    <textarea placeholder="Message" name="Mensaje" onkeyup="adjust_textarea(this)"></textarea>
    <input type="submit" value="Enviar">

    <input type="hidden" name="_next" value="//augustodaniele.com.ar/contacto/" />
    <input type="hidden" name="_subject" value="Contacto desde la web" />
  </form>
</div>
