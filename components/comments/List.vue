<template>

    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div class="table" v-else>
<table>
    <thead>
  <tr>
    <th>Id</th>
    <th>Email</th>
    <th>Name</th>
  </tr>
  </thead>
<tbody >
   <!-- <nuxt-link :to=" 
  '/comments/'" > -->
 <tr v-for="comment of comments">

    <td>{{ comment.id }}</td>
    <td>{{ comment.email }}</td>
    <td>{{ comment.name }}</td>
   
  </tr>
   <!-- </nuxt-link> -->
</tbody>
</table>
</div>





      <!-- <h1>Nuxt comments</h1>
      <ul>
        <li v-for="comment of comments">{{ comment.email }}</li>
      </ul>
      <button @click="$fetch">Refresh</button> -->

   
</template>

<script>
  export default {
    data() {
      return {
        comments: []
      }
    },
    async fetch() {
      this.comments = await fetch(
        'https://jsonplaceholder.typicode.com/comments'
      ).then(res => res.json())
    }
  }
</script>