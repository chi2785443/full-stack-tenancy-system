import React, { useContext } from "react";
import assests from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Appcontext.context.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();

  const { userData, backendUrl, setUserData, setIsLoggedIn } =
    useContext(AppContext);

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(backendUrl + "/api/auth/logout");

      data.success && setIsLoggedIn(false);
      data.success && setUserData(false);

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" flex w-full justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0 font-bold">
      <h1 className=" text-blue-800 text-md ">Tenancy system...</h1>
      {userData ? (
        <div className="w-8 h-8 flex justify-center items-center bg-black rounded-full text-white relative group">
          {/* {userData.name[0].toUpperCase()} */}
          <div className=" absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
              {/* {!userData.isAccountVerified && (
                <li
                  onClick={sendVerificationOtp}
                  className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                >
                  Verify Email
                </li>
              )} */}
              <li
                onClick={logout}
                className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 text-gray-800 hover:bg-gray-100 "
        >
          Login
          <img src={assests.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
};

export default NavBar;
