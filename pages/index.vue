<template>
  <section>

      <a @click.prevent="setsortcomments()"><button class="sort-id">Сортировать по id в обратном порядке</button></a>

      <pagination
      :totalPages=" comments.length / perPage "
      :perPage="perPage"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
<div class="table">
<table>
    <thead>
  <tr>
    <th>Id</th>
    <th>Email</th>
    <th>Name</th>
  </tr>
  </thead>
    <tbody v-if="currentPage != 1">
     
      <tr class="item"  v-for="comment of comments.slice(currentPage * perPage, (currentPage * perPage) + perPage)" :key="comment.id" @click.prevent="openComment(comment)">
           <td>{{comment.id}}</td>
         <td>{{comment.email}}</td>
         <td>{{comment.name}}</td> 
      </tr>
   
    </tbody>

    <tbody v-else>
   <tr class="item" v-for="comment of comments.slice(0, perPage)" :key="comment.name" @click.prevent="openComment(comment)">
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
.sort-id {
  background-color: #fff;
  color: #000;
  padding: 10px;
  width: 100%;
  font-size: 1em;
  cursor: pointer;

}
</style>

<script>

import Pagination from '../components/Pagination.vue'

export default {
  
  async fetch({store}) {
    if (store.getters['comments/comments'].length === 0) {
      await store.dispatch('comments/fetch')
    }
  },
  data: () => ({
    pageTitle: 'Comments page',
    currentPage: 1,
    perPage: 10,
  }),
  computed: {
    comments() {
      return this.$store.getters['comments/comments']
    },
    },
  methods: {
    openComment(comment) {
      this.$router.push('/comments/' + comment.id)
    },
     onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    },
  
async setsortcomments() {
    await this.$store.dispatch('comments/setsortcomments')
},

  },
  
  components: [Pagination]
}
</script>

