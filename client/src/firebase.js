import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyDoXKyOnMZubqL3S6tmyj_MLXT0khWJG-4',
  authDomain: 'kanbanfaizal.firebaseapp.com',
  databaseURL: 'https://kanbanfaizal.firebaseio.com',
  projectId: 'kanbanfaizal',
  storageBucket: 'kanbanfaizal.appspot.com',
  messagingSenderId: '486595303341'
})

export const db = app.database()
export const tasksRef = db.ref('tasks')
