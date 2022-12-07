// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import React, { useState, useEffect, createContext, useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyA0m7RG2iNwbMzQT2L4HAJYVF71e055DCY",
  authDomain: "todoist-clone-daa16.firebaseapp.com",
  projectId: "todoist-clone-daa16",
  storageBucket: "todoist-clone-daa16.appspot.com",
  messagingSenderId: "364779982136",
  appId: "1:364779982136:web:a0df3fe5a5a48511d485cd",
  measurementId: "G-92TB8MX0PF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export type AuthContextType = ReturnType<typeof useProvideAuth>;

const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      return user;
    });

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      return user;
    });

  const signOutUser = signOut(auth);

  return {
    signUp,
    signIn,
    signOut: signOutUser,
    user,
    loading,
  };
}

export const useAuth = () => useContext(AuthContext) ?? ({} as AuthContextType);
