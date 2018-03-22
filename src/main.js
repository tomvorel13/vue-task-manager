import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBeBFlKl_dVp2TzTYmltv-ziy7_NWpOIV0",
      authDomain: "vue-task-manager-18e83.firebaseapp.com",
      databaseURL: "https://vue-task-manager-18e83.firebaseio.com",
      projectId: "vue-task-manager-18e83",
      storageBucket: "vue-task-manager-18e83.appspot.com",
      messagingSenderId: "849187554505"
    });
  }
})
