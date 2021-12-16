<template>
  <div class="min-h-screen">
    <Header/>
    <section class="mt-5">
      <h1 class="text-center text-4xl blueMf tracking-widest">Merci de votre intérêt</h1>
      <h2 class="text-center font-bold my-3 tracking-widest">MF-Technologies se situe au</h2>
      <h3 class="text-center blueMf font-bold tracking-widest">192, Rue Legendre - 75017 PARIS</h3>
    </section>

    <aside class="wFrame m-auto flex justify-center flex-col items-center mt-2">
      <iframe title="Localisation MF Technologies" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.224260262666!2d2.324425715854362!3d48.89206310628887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e549e95271b%3A0x12f33a02d1c9ea20!2s192%20Rue%20Legendre%2C%2075017%20Paris!5e0!3m2!1sfr!2sfr!4v1639472392668!5m2!1sfr!2sfr"
              width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" name="Localisation MF Technologies">
      </iframe>
      <a rel="referrer" href="mailto:abc@example.com?subject = Envoie de CV &body = Voici ma candidature. Je reste à disposition pour toutes informations complémentaires" class="btn btn-sm animated-button victoria-one"><b>Nous contactez</b> <i class="fas fa-long-arrow-alt-right"></i></a>
    </aside>
  </div>
</template>

<script>
export default {
  name:'contact',
  components:true,
  head () {
    return {
      title: "Contact MF Technologies",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Localisation de MF-Technologies basée à Paris et possibilité de nous contactez par mail en cliquant sur le bouton situé sur la page",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'MF Technologies',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/icon_mf_technologies.png',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:'Page contact de MF-Technologies afin de communiquer avec notre RH'
        }
      ],
    }
  },
}
</script>

<style scoped>
.blueMf{
  color: #024d91;
}
.wFrame{
  width: 70%;
}
a.animated-button:link:after, a.animated-button:visited:after {
  content: "";
  position: absolute;
  height: 0;
  left: 50%;
  top: 50%;
  width: 150%;
  z-index: -1;
  -webkit-transition: all 0.75s ease 0s;
  -moz-transition: all 0.75s ease 0s;
  -o-transition: all 0.75s ease 0s;
  transition: all 0.75s ease 0s;
}
a.animated-button:link:hover, a.animated-button:visited:hover {
  text-shadow: none;
  color: white;
}
a.animated-button:link:hover:after, a.animated-button:visited:hover:after {
  height: 450%;
}
a.animated-button:link, a.animated-button:visited {
  position: relative;
  display: block;
  margin: 30px auto 15px;
  padding: 14px 80px;
  font-size:14px;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: .08em;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
a.animated-button.victoria-one {
  border: 2px solid #024d91;
}
a.animated-button.victoria-one:after {
  background: #024d91;
  -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  transform: translateX(-50%) translateY(-50%) rotate(-25deg);
}
@media all and (max-width: 769px){
  .wFrame{
    width: 100%;
  }
  .text-4xl{
    font-size: 1.5em;
  }
  a.animated-button:link, a.animated-button:visited{
    font-size: 10px;
  }
}
</style>
