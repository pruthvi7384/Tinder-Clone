import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC30bY3dRfNgISmxktG-SaTaSNv0mt8SyE",
  authDomain: "tinder-clone-21689.firebaseapp.com",
  projectId: "tinder-clone-21689",
  storageBucket: "tinder-clone-21689.appspot.com",
  messagingSenderId: "196937419718",
  appId: "1:196937419718:web:acdc84c6ed7c831b5e40c7",
  measurementId: "G-8JJFPHCSCH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;