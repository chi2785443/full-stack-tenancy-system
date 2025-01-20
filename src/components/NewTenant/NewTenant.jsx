import React, { useState } from "react";

import axios from "axios";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredStatus, setEnteredStatus] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const StatusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      axios.defaults.withCredentials = true;

      if (tenantData) {
        const { data } = await axios.post(backendUrl + "/api/auth/sign-up", {
          enteredName,
          enteredStatus,
        });

        if (data.success) {
          getUserData();
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className=" justify-center align-middle flex flex-col">
      {!isEditing && (
        <button
          className=" px-3 py-1 bg-blue-600 text-white mx-28 my-4 text-xl rounded-lg"
          onClick={startEditingHandler}
        >
          Add New Tenant
        </button>
      )}
      {isEditing && (
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center"
        >
          <div className=" flex flex-col justify-center px-28 py-8 w-[700px] bg-blue-600 text-white text-xl rounded-lg">
            <div className=" flex flex-col gap-4 ">
              <label>Tenant name</label>
              <input
                type="text"
                value={enteredName}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="flex gap-2 items-center ">
              <label>Active status</label>
              <input
                type="checkbox"
                value={enteredStatus}
                onChange={StatusChangeHandler}
              />
            </div>
            <div className="flex justify-center flex-1 mt-2 gap-2">
              <button
                className="py-2 px-4 bg-slate-600 text-white rounded-full text-lg"
                type="button"
                onClick={stopEditingHandler}
              >
                Cancel Expense
              </button>
              <button
                className="py-2 px-4 bg-blue-900 text-white rounded-full text-lg"
                type="submit"
              >
                Add Expense
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewExpense;
