<template>
  <section>
    <h1 class="text-center">{{pageTitle}}</h1>
    <h1>Current page: {{ currentPage }}</h1>

     <!-- <a @click="sort('id')"><button>Сортировать по id</button></a> -->

      <a @click.prevent="setsortcomments()"><button>Сортировать по id</button></a>

<a @click="sortParam='name'"><button>Сортировать по name</button></a>

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
    

       <!-- <tr class="item" v-else-if="currentPage != 1" v-for="comment of comments.slice(currentPage * perPage, (currentPage * perPage) + perPage)" :key="comment.id" @click.prevent="openComment(comment)">
           <td>{{comment.id}}</td>
         <td>{{comment.email}}</td>
         <td>{{comment.name}}</td> 
      </tr> -->
     
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
</style>

<script>
import {mapActions, commit, store} from 'vuex'
import Pagination from '../components/Pagination.vue'
import { SET_SORT_COMMENTS, SORT_COMMENTS } from '../store/mutation-types'
export default {
  
  async fetch({store}) {
    if (store.getters['comments/comments'].length === 0) {
      await store.dispatch('comments/fetch')
    }
  },
  data: () => ({
    pageTitle: 'Comments page',
    sortParam: '',
     currentSort: 'id',
  currentSortDir: 'asc',
    currentPage: 1,
    perPage: 10,
    currentComments: []
  }),
  computed: {
    comments() {
      return this.$store.getters['comments/comments']
    },
    sortedList () {
                switch(this.sortParam){
                    case 'id': return this.comments.sort(sortById);
                    default: return this.comments;
                }
             }
    },
  methods: {
    ...mapActions(['comments/SET_SORT_COMMENTS']),
        sort(s) {
          this.$store.dispatch('comments/setSortComments', s)
        },
    openComment(comment) {
      this.$router.push('/comments/' + comment.id)
    },
     onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    },
    sortById(a, b) { 
      return (a.id > b.id) ? 1 : -1; 
      },
    sortByName(d1, d2) {
      return (d1.name.toLowerCase() > d2.name.toLowerCase()) ? 1 : -1;},

//     sortCommentsId(array) {
//   const result = array.sort((a, b) => a.id > b.id ? 1 : -1);
//   this.$store.commit('setComments', result)
//   // return result;
//   return {...this.$store.state.comments}
// }
async setsortcomments() {
  // this.$store.commit['sortCommentsById']
    await this.$store.dispatch('comments/setsortcomments')
 //await store.dispatch('comments/fetch')
// commit('comments/setComments', comments)
},

  },
  

  components: [Pagination]
}
</script>

