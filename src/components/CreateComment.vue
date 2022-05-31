<template>
<div class="container ">
    <b-form class="d-flex flex-row justify-content-around" @submit="onSubmit">
        <b-form-input
          id="article"
          name="article"
          v-model="text"
          type="article"
          placeholder="Ecrivez votre commentaire"
          accept="image/*"
          
        ></b-form-input>
      
      <b-button type="submit" variant="primary" :disabled="isDisabled">Envoyer</b-button>
      
    </b-form>
    
  </div>
</template>
<script>
export default {
    name: "CreateComment",
    data() {
        return {
            text: "",
            isDisabled: true,
        };
    },
}
</script>
<style scoped lang="scss">
.form-control {
    width:80%
}
</style>