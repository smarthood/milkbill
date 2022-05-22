import firebase  from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBl9JhByuUQzuxquj_Nco-r2aCBpxAd_gI",

  authDomain: "milk-43518.firebaseapp.com",

  projectId: "milk-43518",

  storageBucket: "milk-43518.appspot.com",

  messagingSenderId: "370041205187",

  appId: "1:370041205187:web:8fd72c68f4cf349d644d76"

  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  export  {
    storage, firebase as default
  }