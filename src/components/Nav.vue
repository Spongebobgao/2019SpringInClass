<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <router-link class="navbar-brand" to="/">
    <img alt="Vue logo" src="../assets/1.jpg" height="30">
  </router-link>>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/" active-class="active">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/About">Link</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/MyFriends">Myfriends</router-link>
      </li>
    </ul>

      <form class="form-inline mt-2 mt-md-0" v-if="!Globals.user">
                <a href="#" class="nav-link" @click.prevent="login">Login</a>
                <a href="#" class="nav-link">Sign Up</a>
            </form>
            <span class="navbar-text" v-if="Globals.user">Welcome {{Globles.user.FirstName}}</span>
  </div>
</nav>
</template>
<script>
import { login, Globals } from '@/models/api'
  export default {
    data: () => ({
      Globals: Globals
    }),
    methods: {
      login() {
        login()
      }
    }
}
</script>