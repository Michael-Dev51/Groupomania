<template>
  <div class="container">
        <form class="col-6  bg-light p-4 mx-auto  ">
            <h3 class="text-center">Se connecter</h3>
            <div class="form-group">
                <label>Adresse email</label>
                <input type="email" id="email_addr" name="email_addr" v-model="email" class="form-control form-control-lg" placeholder="adresse@exemple.com"/>
            </div>
            <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" id="user_password" name="user_password" v-model="password" class="form-control form-control-lg" placeholder="Votre mot de passe" />
            </div>
            <button v-on:click="seConnecter()" class="btn btn-dark btn-lg btn-block">Connexion</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
            </p>
             
        </form>
    </div>

  
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isEmailCorrect() {
      const correct = Boolean(
        this.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      );
      correct ? console.log("Email correct") : console.log("Email incorrect");
      return correct;
    },
    isPasswordCorrect() {
      const correct = Boolean(
        this.password.match(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        )
      );
      correct
        ? console.log("Password correct")
        : console.log("Password incorrect");
      return correct;
    },
  },
  methods: {
    seConnecter: function () {
      if (!this.isEmailCorrect || !this.isPasswordCorrect) {
        alert("Email or password incorrect");
        return;
      }
      // Appel vers l'API
      this.$router.push("/allPost");
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}
.forgot-password a {
  color: #2554FF;
}
</style>
