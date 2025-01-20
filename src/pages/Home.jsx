import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

import NewExpense from "../components/NewTenant/NewTenant";
import TenantItem from "../components/Tenant/Tenanttem";
import TenantFilter from "../components/Tenant/TenantFilter";
import Card from "../components/UI/Card";
import { AppContext } from "../context/Appcontext.context";
import axios from "axios";

const Home = () => {
  const { tenants } = useContext(AppContext);
  // console.log(data1);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-blend-overlay bg-blue-400 bg-cover bg-center bg-[url('/bg_img.png')]">
        <NavBar />
        <Header />
      </div>

      <Card className="max-w-[900px] flex flex-col m-auto">
        <NewExpense />
        <TenantFilter />
        {/* <ExpensesChart /> */}

        <div className=" bg-blue-100 shadow-md ">
          {tenants.allTenant.map((tenants) => (
            <TenantItem
              key={tenants.id}
              name={tenants.tenantName}
              status={tenants.activeStatus}
              date={tenants.dateCreated}
            />
          ))}
        </div>
      </Card>
    </>
  );
};

export default Home;
