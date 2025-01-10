// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Nếu bạn muốn sử dụng Firebase Authentication

// Cấu hình Firebase (Lấy từ Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBU-qMTjnqjEx8XnCpSdaHd8BPu22v9ASU",
  authDomain: "nbaoweb.firebaseapp.com",
  projectId: "nbaoweb",
  storageBucket: "nbaoweb.appspot.com",
  messagingSenderId: "1098280662107",
  appId: "1:1098280662107:web:63f3e077cc4a050c387b7e",
  measurementId: "G-SZCC9YQ09J"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Lấy Firestore instance
const db = getFirestore(app);

// Lấy Firebase Authentication (nếu bạn muốn sử dụng xác thực)
const auth = getAuth(app);

export { db, auth };
