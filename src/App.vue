<template>
  <div id="app" >
    <HeaderPage/>
    <main class="fond d-flex align-items-center">
      
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
    FooterPage,
    
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
   background: rgba(0, 0, 255, 0.5) url('./assets/bg-salle-reunion.jpg');
 height: 100%;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 background-blend-mode: lighten;
 
  
  
  
  }
  
main {
  
  flex: 1;
  overflow: hidden;
  
}

</style>
