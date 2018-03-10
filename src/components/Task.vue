<template>
  <li 
    class="list-group-item"
   >
    {{ index + 1 }} - {{ note }}
  <button 
    type="button" 
    class="close" 
    aria-label="Close"
    @click="deleteTask(index)">
    <span aria-hidden="true">&times;</span>
  </button>
  </li>
</template>

<script>
  export default {
  	props: ["note", "index", "deleteTask"]
  };
</script>

