<template>
  <div>
    <video class="fixed top-0 z-1 right-0 bottom-0 min-w-full mt-14" src="../assets/videos/trailer_mf_technologies.mp4" autoplay loop muted preload="auto"></video>
    <div class="minHh"></div>

    <section class="flex flex-wrap explications overflow-hidden">
      <div class="bgBleuRed mh360px flex justify-center items-center w-1/2 p-10">
        <div class="w399px flex justify-around flex-col text-white">
          <p class="fs20px convictions">
            MF-TECHNOLOGIES est un acteur de la transformation digitale et numérique basée à Paris travaillant avec une équipe d'ingénieurs et de techniciens de haut niveau et à forte valeur
            technologique.Notre proximité, notre agilité et notre diversité sont au service de la performance de nos clients.
            Activateur de talents, notre objectif est de faire la différence grâce à une stratégie d'entreprise positive, inclusive et intersectionelle.
          </p>

          <p class="fs20px mt-5 convictions">
            MF-TECHNOLOGIES a acquis la conviction que la véritable richesse de notre métier n’est pas seulement le savoir-faire mais aussi les hommes qui le portent. Aussi, au fil des années,
            ous avons développé un système de valeurs essentiellement tourné vers nos collaborateurs et nos clients.
          </p>
        </div>
      </div>

      <div class="w-1/2 bgRight mh360px flex justify-around flex-col text-white">
        <div class="p-7">
          <span class="z-10 fs20px wMfTech">Pourquoi MF TECHNOLOGIES ?</span>
          <p class="fs20px wMfTech">
            Parce que chaque parcours est unique, atypique, personnel, MF TECHNOLOGIES s'est dotée d'une politique Ressources Humaines souple, réactive et de proximité. Ainsi,
            nos collaborateurs se reconnaissent et révèlent leur personnalité. Cette philosophie se traduit concrètement par deux objectifs : d’un coté, proposer un plan de carrière
            à nos collaborateurs, donner la possibilité d’évoluer au sein de notre entreprise, pouvoir s’épanouir dans son travail.
            Et de l’autre coté, ces points ont une répercussion directe sur la satisfaction de nos clients.
          </p>
        </div>

        <div class="p-7">
          <span class="fs20px wMfTech">Our People</span>
          <p class="fs20px wMfTech">Are Your People</p>
          <p class="fs20px wMfTech">
            Dans un monde sans cesse en évolution et en mouvement, anticiper les évolutions des marchés en matière de métiers et de MF
            TECHNOLOGIES nécessite une réflexion approfondie et une grande exigence au niveau du choix de nouveaux collaborateurs.
          </p>
        </div>
      </div>
    </section>

    <footer class="bgFooter p-5 text-white">
      <div class="w85 m-auto">
        Copyright © 2021 - All Rights Reserved - MF Technologies
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home",
  head () {
    return {
      title: "MF Technologies",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "MF-TECHNOLOGIES est un acteur de la transformation digitale et numérique basée à Paris travaillant avec une équipe d'ingénieurs et de techniciens de haut niveau et à forte valeur technologique.Notre proximité, notre agilité et notre diversité sont au service de la performance de nos clients. Activateur de talents, notre objectif est de faire la différence grâce à une stratégie d'entreprise positive, inclusive et intersectionelle.",
        }
      ],
    }
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://mf-technologies.herokuapp.com",
      "logo": "../static/icon_mf_technologies.png",
    }
  },
  mounted() {
    this.$gsap.to('.convictions',{
      autoAlpha:1,
      x:0,
      scrollTrigger: {
        trigger:".explications",
        start:'top 50%',
        end:'bottom center',
      }
    })

    this.$gsap.to('.wMfTech',{
      autoAlpha:1,
      x:0,
      stagger:{each: 0.4},
      scrollTrigger: {
        trigger:".wMfTech",
        start:'top+=10 50%',
        end:'bottom 55%',
      }
    })
  },
}
</script>

<style>
.wMfTech{
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
}
.convictions{
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
}
.w85{
  width: 85%;
}
.w399px{
  width: 399px;
}
.z-1{
  z-index: -1;
}
.minHh{
  height: 80vh;
}

.bgBleuRed{
  background: url("../assets/pictures/blueRedBackground.png")center no-repeat;
  background-size: cover;
}
.bgRight{
  background: url("../assets/pictures/sculpture.png")center no-repeat;
  background-size: cover;
}
.fs20px{
  font-size: 20px;
}
.bgFooter{
  background-color: #4b565a;
}
.mh360px{
  min-height: 630px;
}
@media all and (max-width: 1025px) {
  .minHh{
    height: 28vh;
  }
}
@media all and (max-width: 769px) {
  .explications{
    flex-direction: column;
  }
  .explications div:nth-child(1), .explications div:nth-child(2){
    width: 100%;
  }
}
@media all and (max-width: 426px) {
  .minHh{
    height: 17vh;
  }
}
</style>
