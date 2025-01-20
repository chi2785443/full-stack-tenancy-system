import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [tenants, setTenants] = useState({});
  const data1 = {};

  axios.defaults.withCredentials = true;

  useEffect(() => {
    getAllTenants();
    console.log(tenants);
  }, []);

  const getAllTenants = async () => {
    setIsLoggedIn(true);
    try {
      const { data } = await axios.get(backendUrl + "/tenants/get-all-tenants");
      data.success ? setTenants(data) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // const getAuthState = async () => {
  //   try {
  //     const { data } = await axios.get(backendUrl + "/tenants/get-all-tenants");
  //     if (data.success) {
  //       setIsLoggedIn(true);
  //       getUserData();
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    tenants,
    // setUserData,
    // userData,
    // getUserData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
