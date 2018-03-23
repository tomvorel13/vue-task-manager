<template>
  <div class="container">
    <div class="col-md-8 mx-auto">
      <h1 class="text-center">Task MANAGER</h1>
			<transition enter-active-class="animated slideInUp" leave-active-class="animated fadeOut" mode="out-in">
				<app-alert 
				v-show="showAlert" 
				:notesArray="notes"
				:isInputEmpty="isInputEmpty"></app-alert>
			</transition>
      <ul class="list-group">
        <transition-group enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight" mode="out-in">
          <app-task 
            v-for="(note, index) in notes" 
            :key="index"
						:note="note"
						:index="index"
						:deleteTask="removeNote" >
          </app-task>
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
	import axios from "axios";

	//Components
	import Alert from "./components/Alert.vue";
	import Task from "./components/Task.vue";
	import * as firebase from "firebase";

	export default {
		data() {
			return {
				myNote: "",
				notes: [],
				isInputEmpty: false,
				showAlert: false
			};
		},
		methods: {
			addNote() {
				if (this.myNote == "") {
					this.showAlert = true;
					this.isInputEmpty = true;
				} else {
					let todo = this.myNote;
					this.showAlert = false;
					this.notes.push(todo);
					firebase
						.database()
						.ref("todos")
						.push(todo)
						.then(data => console.log(data))
						.catch(error => console.log(error));
					this.myNote = "";
				}
			},
			removeNote(index) {
				if (this.notes.length > 0) {
					this.notes.splice(index, 1);
					let newData = this.notes;
					firebase
						.database()
						.ref("todos")
						.set(newData);
				} else {
					alert("You have no notes left!");
				}
			},
			clearNotes() {
				if (this.notes.length == 0 || this.addN == true) {
					this.showAlert = true;
					this.isInputEmpty = false;
				} else {
					this.notes = [];
					firebase
						.database()
						.ref("todos")
						.remove();
				}
			}
		},
		components: {
			appAlert: Alert,
			appTask: Task
		},
		created() {
			let data_list = [];
			firebase
				.database()
				.ref("todos")
				.once("value")
				.then(snapshot => {
					snapshot.forEach(childSnapshot => {
						var key = childSnapshot.key;
						var childData = childSnapshot.val();
						data_list.push(childData);
					});
					console.log(data_list, data_list.length);
					this.notes = data_list;
				});
		}
	};
</script>


<style>

</style>

