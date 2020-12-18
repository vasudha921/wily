import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCcADRDEFRfDNAdOSFa1BCe13EKdkPl4x8",
  authDomain: "bookworld-620c9.firebaseapp.com",
  databaseURL: "https://bookworld-620c9.firebaseio.com",
  projectId: "bookworld-620c9",
  storageBucket: "bookworld-620c9.appspot.com",
  messagingSenderId: "525610193973",
  appId: "1:525610193973:web:339e9f117323afdc350d7c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();