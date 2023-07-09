<template>
<div>
    <div class="pagination-row">
        <!-- Previous -->
        <h1>{{ comments.length }}</h1>
        <button class="pagination-button">&lt;-</button>
        <span v-for=" (item, index) in new Array(10)" :key="index">
        <button class="pagination-button">{{ index + 1 }}</button>
        </span>
   <!-- Next -->
   <button class="pagination-button">-&gt;</button>
   </div>
    <slot />
</div>
</template>

<script>

export default {
  computed: {
        comments() {
            return this.$store.getters["comments/comments"];
        }
}
}
</script> 

<style>
.pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 25px;
    font-size: 1em;
    cursor: pointer;
    border: none;   
}

.pagination-row {
    padding: 5px 0;
    text-align: center;
}
</style>