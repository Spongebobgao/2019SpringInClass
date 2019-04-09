
<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-lg-6">
        <div class="card text-center">
            <div class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item">
          <a class="nav-link active" href="">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Single Sign in</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <h4 class="card-title">Register</h4>
      <div class="card-text">
          <form @submit.prevent="submit">
              <div class="form-group">
                <label for="FirstName">FirstName</label>
                <input type="text" v-model="data.FirstName"
                  class="form-control" name="FirstName" id="FirstName" aria-describedby="helpFirstName" placeholder="FirstName">
                <small id="helpFirstName" class="form-text text-muted"></small>
              </div>
              <div class="form-group">
                <label for="LastName">LastName</label>
                <input type="text" v-model="data.LastName"
                  class="form-control" name="LastName" id="LastName" aria-describedby="helpLastName" placeholder="LastName">
                <small id="helpLastName" class="form-text text-muted"></small>
              </div>
              <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" class="form-control" name="Password" id="Password" placeholder="Password">
              </div>
              <div class="form-group">
                <label for="Birthday">Birthday</label>
                <input type="text" v-model="data.Birthday"
                  class="form-control" name="Birthday" id="Birthday" aria-describedby="helpBirthday" placeholder="Birthday">
                <small id="helpBirthday" class="form-text text-muted"></small>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newUser">
        <div class="card-body">
          <h4 class="card-title">Congrats! You're registered!</h4>
          <p class="card-text">{{newUser.FirstName}} {{ newUser.FirstName}}</p>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import toastr from 'toastr';
import 'toastr/build/toastr.css'
import { Register } from '@/models/users'
import { Globals } from "@/models/api";
export default {
    data: () => ({
        data: { },
        newUser: null
    }),
    methods: {
      async submit() {
        var m = null
        try {
          m = await Register(this.data);
          this.newUser = m;
          toatr.success("You've reigitered successfully!")
        } catch {
          Globals.errors.push(m);
          toastr.error(error.msg)
        }
      }
    }
}
</script>