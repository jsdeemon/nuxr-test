<template>
  <section>
    <h1>{{comment.name}}</h1>

    <hr>

    <h3>{{comment.email}}</h3>
  </section>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const comment = await $axios.$get('https://jsonplaceholder.typicode.com/comments/' + params.id)
    return {comment}
  }
}
</script>

