import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA2GJoS_UYaGceA9XiO_tV9U3iHyJK3cZY",
    authDomain: "auctux-ghostplan.firebaseapp.com",
    databaseURL: "https://auctux-ghostplan.firebaseio.com",
    projectId: "auctux-ghostplan",
    storageBucket: "",
    messagingSenderId: "52133431759",
    appId: "1:52133431759:web:943458e0c94f3cb8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;