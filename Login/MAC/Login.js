// Import Firebase SDKs
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from './config'; // Nhập Firestore từ config.js
import { collection, addDoc } from "firebase/firestore"; // Các hàm cần thiết từ Firestore

// Hàm đăng nhập Google và lưu thông tin vào Firestore
async function googleLogin() {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const user = result.user; // Lấy thông tin người dùng từ kết quả đăng nhập

    // Kiểm tra người dùng đã đăng nhập hay chưa
    console.log('User Info:', user);

    // Lưu thông tin vào Firestore
    const docRef = await addDoc(collection(db, "users"), {
      userId: user.uid,
      userName: user.displayName,
      userEmail: user.email,
      createdAt: new Date(), // Thêm thời gian tạo tài khoản
    });

    console.log("Document written with ID: ", docRef.id);

  } catch (error) {
    console.error("Error during Google login: ", error);
  }
}

// Gắn sự kiện click cho nút đăng nhập Google
const googleLoginButton = document.getElementById('google-login');
if (googleLoginButton) {
  googleLoginButton.addEventListener('click', googleLogin);  // Khi nhấn vào nút, gọi hàm googleLogin
} else {
  console.error('Google login button not found');
}
