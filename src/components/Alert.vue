<template>
  <div class="alert alert-danger" role="alert">
    {{this.isInputEmpty ? "Please insert some text first." : "You have no tasks to delete."}}
  </div>
</template>

<script>
  export default {
  	props: ["isInputEmpty"],
  };
</script>

<style>

</style>
