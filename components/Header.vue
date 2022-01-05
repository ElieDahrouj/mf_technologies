<template>
  <div class="sticky top-0 z-50">
    <nav class="w-full bg-white min-h-screen modalMobile">
      <div @click="switchStateScreenMobile(false)" class="closeModalMobile">
        <i class="fas fa-times"></i>
      </div>

      <ul class="flex flex-col justify-evenly items-center min-h-screen">
        <li><img class="w300px" src="../assets/pictures/logo-mf-consulting.svg" alt="logo MF Consulting"></li>
        <li class="mx8px" @click="switchStateScreenMobile(false)"><nuxt-link class="linkNavBar font-bold fs20px" to="/">Home</nuxt-link></li>
        <li class="mx8px" @click="switchStateScreenMobile(false)"><nuxt-link class="linkNavBar font-bold fs20px" to="/MF_Technologies">La Tribu</nuxt-link></li>
        <li class="mx8px" @click="switchStateScreenMobile(false)"><a class="linkNavBar font-bold fs20px" rel="noreferrer" target="_blank" href="https://ui.boondmanager.com/login">Extranet</a></li>
        <li class="mx8px" @click="switchStateScreenMobile(false)"><nuxt-link class="linkNavBar font-bold fs20px" to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>

    <header class="w-full p8px stateHeader">
      <div class="flex justify-between items-center m-auto w85">
        <div class="w200px">
          <nuxt-link to="/">
            <img src="../assets/pictures/logo-mf-consulting.svg" alt="logo MF Consulting">
          </nuxt-link>
        </div>

        <div @click="switchStateScreenMobile(true)" class="navBarMobile fs20px cMfTechSecondary">
          <i class="fas fa-bars"></i>
        </div>

        <nav class="navList">
          <ul class="flex fs20px">
            <li class="mx8px"><nuxt-link class="linkNavBar font-bold" to="/">Home</nuxt-link></li>
            <li class="mx8px"><nuxt-link class="linkNavBar font-bold" to="/MF_Technologies">La Tribu</nuxt-link></li>
            <li class="mx8px"><a class="linkNavBar font-bold" rel="noreferrer" target="_blank" href="https://ui.boondmanager.com/login">Extranet</a></li>
            <li class="mx8px"><nuxt-link class="linkNavBar font-bold" to="/contact">Contact</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    switchStateScreenMobile(state = false) {

      if (state === false){
        this.$gsap.timeline()
        .to('.stateHeader',{
          display:'block'
        })
        .to('.modalMobile', {
          autoAlpha: 0,
          display: 'none',
          x: "100%"
        })
      }

      if (state){
        this.$gsap.timeline()
          .to('.stateHeader',{
            display:'none'
          })
          .to('.modalMobile', {
          autoAlpha: 1,
          display: 'block',
          x: 0
        })
      }

    },
  },
}
</script>

<style scoped>
.w200px{
  width: 200px;
}
.w300px{
  width: 300px;
}
.modalMobile{
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
}
.linkNavBar{
  transition: all .2s ease-in;
}
.linkNavBar:hover{
  color: #e14b19;
}
.navBarMobile{
  display: none;
}
.closeModalMobile{
  padding: 6px 15px;
  position: absolute;
  font-size: 30px;
  right: 0;
  color: red;
}
.p8px{
  padding: 8px;
}
.mx8px{
  margin: 0 8px;
}
@media all and (max-width: 769px) {
  .navBarMobile{
    display: block;
  }
  .navList{
    display: none;
  }
  .bgWhiteOpacity{
    justify-content: space-between;
  }
  .bgWhiteOpacity .w85{
    width: 100%;
  }
  .mx8px{
    margin: 0 8px;
  }
}
</style>
