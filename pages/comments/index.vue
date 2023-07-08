<template>
  <section>
    <h1 class="text-center">{{pageTitle}}</h1>
<div class="table">
<table>
    <thead>
  <tr>
    <th>Id</th>
    <th>Email</th>
    <th>Name</th>
  </tr>
  </thead>
    <tbody>
     
      <tr class="item" v-for="comment of comments" :key="comment.id" @click.prevent="openComment(comment)">
           <td>{{comment.id}}</td>
         <td>{{comment.email}}</td>
         <td>{{comment.name}}</td> 
        
      </tr>
     
    </tbody>
    </table>
    </div>
  </section>
</template>

<style>
.text-center {
  text-align: center;
}
@media(min-width: 760px) {
  .table {
    padding-left: 25% !important;
    padding-right: 25% !important;
  }
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.item{
  cursor: pointer;
}
</style>

<script>
export default {
  async fetch({store}) {
    if (store.getters['comments/comments'].length === 0) {
      await store.dispatch('comments/fetch')
    }
  },
  data: () => ({
    pageTitle: 'Comments page'
  }),
  computed: {
    comments() {
      return this.$store.getters['comments/comments']
    }
  },
  methods: {
    openComment(comment) {
      this.$router.push('/comments/' + comment.id)
    }
  }
}
</script>

