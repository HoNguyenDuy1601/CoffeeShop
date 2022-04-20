import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";
const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={value} {...props}>
      {props.children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}
export { AuthContextProvider, useAuth };
