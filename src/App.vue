<template>
  <div class="container">
    <div class="col-md-8 mx-auto">
      <h1 class="text-center">Task MANAGER</h1>
      <ul class="list-group">
        <transition-group enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight" mode="out-in">
          <li
            @click="removeNote(index)" 
            class="list-group-item" 
            v-for="(note, index) in notes" 
            :key="note">
            {{ index + 1 }} - {{ note }}
          </li>
        </transition-group>  
      </ul>
      <hr>
      <form>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Add task..." v-model="myNote">
          <button class="btn btn-block btn-success mt-2" @click.prevent="addNote">Add Task</button>
          <button class="btn btn-block btn-danger mt-1" @click.prevent="clearNotes">Clear Tasks</button>
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
  		},
  		clearNotes() {
  			if (this.notes.length == 0) {
  				alert("You have no notes.");
  			} else {
  				this.notes = [];
  			}
  		}
  	}
  };
</script>


<style>

</style>

