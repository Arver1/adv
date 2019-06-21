import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


export const appName = 'farverreact';
export const firebaseConfig = {
  apiKey: "AIzaSyDPdHpvLwoof7sFBtcJOpgD7V9_UYSR_kA",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: `${appName}`,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "564383645114",
  appId: "1:564383645114:web:4ffef9d0eb71a86e"
};


firebase.initializeApp(firebaseConfig); //для соединения
firebase.firestore().settings({})
