<template>
  <div class="container">
    <div class="col-md-8 mx-auto">
      <h1 class="text-center">Task MANAGER</h1>
      <ul class="list-group">
        <li @click="removeNote(index)" class="list-group-item" v-for="(note, index) in notes" :key="index">{{ index + 1 }} - {{ note }}</li>
      </ul>
      <hr>
      <form>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Add task..." v-model="myNote">
          <button class="btn btn-block btn-success mt-2" @click.prevent="addNote">Add Task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
  	data() {
  		return {
  			myNote: "",
  			notes: []
  		};
  	},
  	methods: {
  		addNote() {
  			if (this.myNote == "") {
  				alert("You must enter some text first!");
  			} else {
  				this.notes.push(this.myNote);
  				this.myNote = "";
  			}
  		},
  		removeNote(index) {
  			if (this.notes.length > 0) {
  				this.notes.splice(index, 1);
  			} else {
  				alert("You have no notes left!");
  			}
  		}
  	}
  };
</script>

<style>

</style>
