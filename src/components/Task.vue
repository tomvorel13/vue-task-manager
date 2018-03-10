<template>
  <li 
    class="list-group-item"
    @click="deleteTask(index)">
    {{ index + 1 }} - {{ note }}
  </li>
</template>

<script>
export default {
  props: ['note', 'index', 'deleteTask']
}
</script>

