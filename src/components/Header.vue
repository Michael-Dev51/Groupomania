<template>
  <header class="d-flex align-items-center justify-content-around">
    <div>
      <img
        src="../assets/icon-left-font.png"
        alt="Logo groupomania"
        width="20%"
      />
    </div>
    <div>       
      <router-link to="/signup">s'inscrire</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style lang="scss">
header {
  background-color: #2b75a6;
  min-height: 100px;
  a {
    color: white;
    &:hover {
      color: red;
      text-decoration: none;
    }
  }
}
</style>
