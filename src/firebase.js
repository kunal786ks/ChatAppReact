import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCciR5OZlg40WHAcfqUpBwlDoRMcpQqBNc",
  authDomain: "chat-firebase-2276d.firebaseapp.com",
  projectId: "chat-firebase-2276d",
  storageBucket: "chat-firebase-2276d.appspot.com",
  messagingSenderId: "101859176543",
  appId: "1:101859176543:web:032431f4ca337b0e64ebea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage(app);
export const db=getFirestore(app);