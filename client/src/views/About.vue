<template>
  <div class="container is-fullhd">
    <a class="button is-light" @click='modalIn'>Create New Task</a>
    <div :class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">New Task</p>
          <button class="delete" aria-label="close" @click='modalOut'></button>
        </header>
        <section class="modal-card-body">
          <!-- FORM -->
          <div class="field">
            <div class="control">
              <p>Title</p>
              <input class="input" type="text" v-model="newTitle" placeholder="Task title">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <p>Description</p>
              <textarea class="textarea" v-model="newDesc" placeholder="Description"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <p>Point</p>
              <input class="input" type="number" v-model="newPoint" placeholder="Point">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <p>Assign To</p>
              <input class="input" type="text" v-model="newAssigned" placeholder="Assign to">
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click='addNewTask'>Save</button>
          <button class="button" @click='modalOut'>Cancel</button>
        </footer>
      </div>
    </div>
    <stages/>
  </div>
</template>

<script>
import { tasksRef } from '@/firebase'
import stages from '@/components/stages.vue'

export default {
  name: 'kanban',
  data () {
    return {
      modal: 'modal',
      newTitle: '',
      newDesc: '',
      newPoint: '',
      newAssigned: ''
    }
  },
  components: {
    stages
  },
  firebase: {
    firebaseTask: tasksRef
  },
  methods: {
    modalIn: function () {
      this.modal = 'modal is-active'
    },
    modalOut: function () {
      this.modal = 'modal'
    },
    addNewTask: function () {
      tasksRef.push({title: this.newTitle, description: this.newDesc, point: this.newPoint, assignedTo: this.newAssigned, status: 'Back-log'})
      this.modal = 'modal'
      this.newTitle = ''
      this.newDesc = ''
      this.newPoint = ''
      this.newAssigned = ''
    }
  },
  computed: {
    tasks: function () {
      return this.firebaseTask
    }
  }
}
</script>

<style>

</style>
