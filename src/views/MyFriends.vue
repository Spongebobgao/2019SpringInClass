<template>

<div>
  <h1 v-if="Globals.user">{{ Globals.user.name }} Friends Page</h1>
  <ul>
    <li v-for="friends in friends" :key="friends.id">{{ friends.FirstName}} {{ friends.LastName}}</li>
  </ul>
</div>
  </template>

<script>
import { Globals } from '@/models/api'
import { GetFriends } from "../models/users.js"

GetFriends()
export default {
  data: () => ({
    Globals: Globals,
    friends: []
  }),
  async mounted() {
    this.friends = await GetFriends()
  }
}
</script>
