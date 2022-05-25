<template>
  <div id="app" >
    <HeaderPage/>
    <main class="fond">
      <router-view/>
    </main>
    <FooterPage/>
    
  </div>
</template>

<script>
import HeaderPage from './components/Header.vue'
import FooterPage from './components/Footer.vue'

export default {
  name: 'HomeView',
  components: {    
    HeaderPage,
    FooterPage
  }
}
</script>
<style lang="scss">
#app {
  min-height:100vh; 
	display:flex; 
	flex-direction:column;
  
  /**/
}
.fond{
   background: rgba(0, 0, 0, 0.7) url('./assets/bg-salle-reunion.jpg');
 height: 100%;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 background-blend-mode: darken;
 opacity:0.3;
  
  
  
  }
  
main {
  
  flex: 1;
  overflow: hidden;
  
}

</style>
