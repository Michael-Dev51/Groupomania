<template>
  <div class="container">
    <form class="col-6 bg-light p-4 mx-auto">
      <h3 class="text-center">Forgot Password</h3>

      <div class="form-group">
        <label>Adresse email</label>
        <input 
        type="email"
        name="email"
        v-model="email"
        class="form-control form-control-lg"
        placeholder="adresse@exemple.com"
         />
        
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        réinitialiser le mot de passe
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
