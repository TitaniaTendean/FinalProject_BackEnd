import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCR5D2Pnmf_0RSEomiyTpx_kdkGMqeHmwE",
    authDomain: "myfiregram-64f1b.firebaseapp.com",
    projectId: "myfiregram-64f1b",
    storageBucket: "myfiregram-64f1b.appspot.com",
    messagingSenderId: "1069368450062",
    appId: "1:1069368450062:web:98bb174cc98c361749f05f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStore = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestorage };