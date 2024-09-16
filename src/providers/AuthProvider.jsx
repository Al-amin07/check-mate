import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [Datas, setDatas] = useState({});
  const [dataLoading, setDataLoading] = useState(false)
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");
  const [roleLoading, setRoleLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = async () => {
    // setLoading(true);
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    localStorage.setItem("token", "");
    return signOut(auth);
  };
  // console.log(userDetails);

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const getRole = async (email) => {
    setRoleLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/role/${email}`
      );

      setUserDetails(data);

      if (data?.role) {
        setRole(data?.role);
      }
      return data?.role;
    } catch (error) {
      console.log(error?.message);
    } finally {
      setRoleLoading(false);
    }
  };

  const saveUser = async (currentUser) => {
    // console.log(currentUser);
    const userData = {
      email: currentUser?.email,
      name: currentUser?.displayName,
      image: currentUser?.photoURL,
      role: "employee",
      isVerified: false,
      companyName: currentUser?.companyName || "",
      companySize: currentUser?.companySize || "",
      time: new Date(),
    };
    setUserDetails(userData);
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/user`,
      userData
    );
    console.log(data);
  };

  // Get token from server
  const getToken = async (email) => {
    // console.log(email);
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      { email },
      { withCredentials: true }
    );
    localStorage.setItem("token", data.token);
    // console.log(data);
  };

  useEffect(() => {
    if (role === "admin") getAdminData();
  }, [role]);
  const getAdminData = async () => {
    setDataLoading(true)
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin-route`, {withCredentials: true})
      console.log(data)
      setDatas(data)
    } catch (error) {
      console.log(error?.message)
    }finally{
      setDataLoading(false)
    }
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser && currentUser?.email) {
        // saveUser(currentUser);
        getRole(currentUser?.email);
        getToken(currentUser.email);
      }

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    setUser,
    signInWithGoogle,
    resetPassword,
    logOut,
    userDetails,
    updateUserProfile,
    saveUser,
    role,
    getRole,
    roleLoading,
    setRole,
    setDatas,
    Datas,
    dataLoading,
    getAdminData
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  // Array of children.
  children: PropTypes.array,
};

export default AuthProvider;
