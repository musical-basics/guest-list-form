// Initialize Firebase
// var firebaseConfig = {
//   apiKey: "AIzaSyCXeF5RmiuS4L6QYlAdVPdM_NOdNk3a0lg",
//   authDomain: "lionel-guest-list.firebaseapp.com",
//   databaseURL: "https://lionel-guest-list-default-rtdb.firebaseio.com",
//   projectId: "lionel-guest-list",
//   storageBucket: "lionel-guest-list.appspot.com",
//   messagingSenderId: "454072719270",
//   appId: "1:454072719270:web:01af4f7e9329ecf03c6167",
//   measurementId: "G-Q7VPQRSHLK"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCXeF5RmiuS4L6QYlAdVPdM_NOdNk3a0lg",
    authDomain: "lionel-guest-list.firebaseapp.com",
    databaseURL: "https://lionel-guest-list-default-rtdb.firebaseio.com",
    projectId: "lionel-guest-list",
    storageBucket: "lionel-guest-list.appspot.com",
    messagingSenderId: "454072719270",
    appId: "1:454072719270:web:01af4f7e9329ecf03c6167",
    measurementId: "G-Q7VPQRSHLK"
  };
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const database = firebase.database();