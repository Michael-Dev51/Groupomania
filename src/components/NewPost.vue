<template>
  <div class="">
    <h1 class="text-center">Fil d'actualité</h1>
    <form arial-label="Nouveau message" v-on:submit.prevent>
      <b-form-textarea
        id="message"
        v-model="msgtext"
        placeholder="Quoi de neuf ?"
        rows="3"
        no-resize
      ></b-form-textarea>
    </form>
    <button @click="submit">envoyer</button>
  </div>
</template>

<script>
export default {
  name: "NewPost",
  data() {
    return {
      msgtext: "",
    };
  },
  methods: {
    submit() {
      console.log(this.msgtext)
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
}
</style>
