import React from "react";
import MainLayout from "../../Components/layout/MainLayout";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";

const Dashboard = () => {
  return (
    <>
      <MainLayout highlight="dashboard">
        <section>
          <p className="font-bold text-2xl my-4">Welcome !</p>
          {/* Numerical stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-emerald-200 py-2">
              <div className="flex flex-row justify-around my-2">
                <NotificationsActiveOutlinedIcon sx={{ fontSize: 45 }} />
                <MoreVertIcon sx={{ fontSize: 25 }} />
              </div>
              <div className="flex flex-row my-2 justify-center">
                <p className="text-8xl font-bold mx-1">10</p>
                <p className="flex items-end p-2 rounded-lg text-lg text-red-600 font-bold">
                  Active Alarm
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-emerald-200 py-2">
              <div className="flex flex-row justify-around my-2">
                <MedicationOutlinedIcon sx={{ fontSize: 45 }} />
                <MoreVertIcon sx={{ fontSize: 25 }} />
              </div>
              <div className="text-center">
                <p className="text-8xl font-bold mx-1">08</p>
                <p className="p-2 rounded-lg text-lg text-red-600 font-bold">
                  Ambulances Registered
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-emerald-200 py-2">
              <div className="flex flex-row justify-around my-2">
                <PeopleOutlineIcon sx={{ fontSize: 45 }} />
                <MoreVertIcon sx={{ fontSize: 25 }} />
              </div>
              <div className="flex flex-row my-2 justify-center">
                <p className="text-8xl font-bold mx-1">40</p>
                <p className="flex items-end p-2 rounded-lg text-lg text-red-600 font-bold">
                  Users
                </p>
              </div>
            </div>
          </div>
          {/* graph stats */}
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="col-span-2 bg-emerald-200 p-2 rounded-2xl h-64">
              <p className="font-semibold">Alarms per month</p>
            </div>
            <div className="col-span-1 bg-emerald-200 p-2 rounded-2xl h-64">
              <p className="font-semibold">Cases per region</p>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Dashboard;
