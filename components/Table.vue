<template>
<div class="table">
<table>
    <thead>
  <tr>
    <th>Id</th>
    <th>Email</th>
    <th>Name</th>
  </tr>
  </thead>
  
  <List />
 
  <!-- <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr> -->
</table>
</div>
</template> 

<script>
import List from "./comments/List.vue";
export default {
    name: "Table",
    components: { List }
}
</script>