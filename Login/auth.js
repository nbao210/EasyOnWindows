        // Import Firebase modules from the CDN
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
        import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyBU-qMTjnqjEx8XnCpSdaHd8BPu22v9ASU",
            authDomain: "nbaoweb.firebaseapp.com",
            projectId: "nbaoweb",
            storageBucket: "nbaoweb.appspot.com",
            messagingSenderId: "1098280662107",
            appId: "1:1098280662107:web:63f3e077cc4a050c387b7e",
            measurementId: "G-SZCC9YQ09J"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        // Check if user is logged in by checking localStorage
        const userName = localStorage.getItem("userName");
        const userPhoto = localStorage.getItem("userPhoto");

        const userInfoDiv = document.getElementById("user-info");

        if (userName && userPhoto) {
            // If user is logged in, display their profile info
            userInfoDiv.innerHTML = `
            <img src="${userPhoto}" alt="Profile Picture">
            <span>${userName}</span>
    `;
        } else {
            // If user is not logged in, display login button
            userInfoDiv.innerHTML = `
                <button type="button" id="google-login" name="google-login" class="btn btn-danger btn-lg btn-block" style="width: 250px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="Google Logo" style="width: 30px; height: 30px; margin-right: 10px;">
                    Login with Google
                </button>
            `;
            document.getElementById("google-login").addEventListener("click", function() {
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider)
                    .then((result) => {
                        const user = result.user;

                        // Save user info to localStorage
                        localStorage.setItem("userName", user.displayName);
                        localStorage.setItem("userPhoto", user.photoURL);

                        // Reload page to reflect the new login state
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.error("Login error:", error.message);
                    });
            });
        }