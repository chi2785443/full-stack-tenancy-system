import React from "react";

const TenantFilter = () => {
  const dropdownChangeHandler = (event) => {};
  return (
    <div className=" bg-blue-300 py-6 px-4">
      <div className=" flex justify-between">
        <label>Filter by active status</label>
        <select onChange={dropdownChangeHandler}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
    </div>
  );
};

export default TenantFilter;
