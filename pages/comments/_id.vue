<template>
  <section>

    <div class="card">
  <div class="container">
    <h4><b>{{ comment.id }}. {{ comment.name }}</b></h4>
    <h5>{{ comment.email }}</h5>
    <p>{{ comment.body }}</p>
    <button class="back" @click="goHome()">Назад</button>
  </div>
</div>

    
  </section>
</template>

<style>
@media(min-width: 760px) {
  .card, .container {
    padding-left: 25% !important;
    padding-right: 25% !important;
  }
}
.card {
  /* Add shadows to create the "card" effect */
  display: flex;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  /* box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); */
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.back {
  text-align: center;
  background-color: #fff;
  color: #000;
  padding: 5px;
  width: 100%;
  cursor: pointer;
   border-radius: 25px;
}
.back:hover {
  background-color: gray;
  color: #fff;
 
}
</style>

<script>

export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const comment = await $axios.$get('https://jsonplaceholder.typicode.com/comments/' + params.id)
    return {comment}
  },

  methods: {
     goHome() {
      this.$router.push('/')
    },
  }
}
</script>

