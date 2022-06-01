<template>
  <!--<div class="container">
        <form class="col-6 bg-light p-4 mx-auto  ">
            <h3 class="text-center">MON PROFIL</h3>
            <div class="form-group">
                <label>Prénom</label>
                <input type="text" id="firstName" name="firstName" v-model="firstname" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Nom</label>
                <input type="text" id="lastName" name="lastName" v-model="lastname" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" id="email_addr" name="email_addr" v-model="email" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" id="user_password" name="user_password" v-model="password" class="form-control form-control-lg"/>
            </div>
            <button v-on:click="seConnecter()" class="btn btn-dark btn-lg btn-block">Sauvegarder</button>
            <p class="forgot-password text-right">
       
        <router-link :to="{ name: 'AllPost' }">fermer sans sauvegarder</router-link>
      </p>
            
             
        </form>
    </div>-->
    <div class="container">
            <div class="row justify-content-center">
                
                <div class="col-12 col-md-10 col-lg-8">
                    <div class="card bg-light">
                        
                        <div class="card-body">
                            <div class="row border d-flex align-items-center m-2 p-0" style="background-color: ghostwhite;">
                                <div class="col-12 col-md-4 p-3 text-center">
                                        <img src="../assets/user-circle.svg" class="rounded-circle m-1 p-0" height="128"/>
                                        <a href="" class="btn btn-sm btn-primary mb-2 p-1" data-toggle="modal" data-target="#modalAvatar">Changer de photo</a>
                                </div>
                                
                                <div class="col-12 col-md-8 text-dark">
                                    <p class="small text-left m-0 p-1">nom : {{name}}</p>
                                    <p class="small text-left m-0 p-1">prenom : {{lastName}}</p>
                                    <p class="small text-left m-0 p-1">Adresse e-mail : {{email}}</p>                                    
                                    <p class="small text-left m-0 p-1">Crée le : {{createdAt}}</p>                                    
                                </div>
                            </div>
                        </div>
                        
                            <div class="row d-flex justify-content-center m-1 p-4">
                                <div class="col-6">
                                    <button class="btn btn-sm btn-block btn-danger">Supprimer mon compte</button>                                    
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

  
</template>

<script>
export default {
    name: "Compte" ,
    data() {
        return {
            name: "michael",
            lastName: "blondeau", 
            email: "michael-blondeau@laposte.net",            
            avatar: "",
            createdAt: "1/06/2022",                         
            submitted: false
        }
    },
  
};
</script>

<style scoped lang="scss">

</style>