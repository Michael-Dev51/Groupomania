<template>
  <div class="">
    <h1 class="text-center">Fil d'actualité</h1>
    <form arial-label="Nouveau message" v-on:submit.prevent>
      <b-form-textarea
        id="message"
        v-model="text"
        placeholder="Quoi de neuf ?"
        rows="3"
        no-resize
      ></b-form-textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewPost",
  data() {
    return {
      text: "",
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
}
</style>
