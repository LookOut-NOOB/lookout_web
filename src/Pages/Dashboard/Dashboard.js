import React from "react";
import MainLayout from "../../Components/layout/MainLayout";
import { AmbulanceStats } from "./components/ambulanceStats";
import { AlarmStats } from "./components/AlarmStats";
import { UserStats } from "./components/UserStats";
import { AmbulanceGraph } from "./components/AmbulanceGraph";
import { CasesGraph } from "./components/CasesGraph";

const Dashboard = () => {
  return (
    <>
      <MainLayout highlight="dashboard">
        <section>
          <p className="font-bold text-2xl my-4">Welcome !</p>
          {/* Numerical stats */}
          <div className="grid grid-cols-3 gap-4">
            <AlarmStats />
            <AmbulanceStats />
            <UserStats />
          </div>
          {/* graph stats */}
          <div className="grid grid-cols-3 gap-4 my-4">
            <AmbulanceGraph />
            <CasesGraph />
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Dashboard;
