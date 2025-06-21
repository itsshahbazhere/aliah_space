import React from "react";
import { useForm } from "react-hook-form";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const AdminLogin = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const auth = getAuth(app);
    const { username, password } = data;
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Login successful:", user);
      window.location.href = "/admin-dashboard";
      // You can redirect or set state here
      })
      .catch((error) => {
      console.error("Login failed:", error.message);
      // Handle error (show message to user, etc.)
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90dvh]">
      <div className=" border">
        <h2 className="text-center">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit" className="text-center">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
