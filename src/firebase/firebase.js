import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyC0fgmPXf2RDyQoP3c2g4JXwST0LGzIa54",
	authDomain: "clone-690bc.firebaseapp.com",
	databaseURL: "https://clone-690bc.firebaseio.com",
	projectId: "clone-690bc",
	storageBucket: "clone-690bc.appspot.com",
	messagingSenderId: "102966742033",
	appId: "1:102966742033:web:931cf9311e749316dcf5b0",
	measurementId: "G-H96LD29GYS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
