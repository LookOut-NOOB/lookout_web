import React from "react";
import MainLayout from "../../Components/layout/MainLayout";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

const Incident = () => {
  return (
    <>
      <MainLayout highlight="incident">
        <section>
          <p className="font-bold text-2xl my-4">Incidents !</p>
          <div className="flex flex-row space-x-8">
            <div className="bg-emerald-200 py-2 px-4 rounded-full">
              <p className="font-semibold text-xl">Register Incident</p>
            </div>
          </div>
          <div className="bg-emerald-200 py-4 px-6 rounded-2xl my-4">
            <div>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-full w-3/4 px-3 py-2 my-2"
                />
              </div>
              <div className="my-2 mx-4">
                <div className="grid grid-row divide-y-2">
                  <div className="flex flex-row justify-between items-center">
                    <div className="py-2 flex flex-row items-center space-x-4">
                      <NotificationsActiveOutlinedIcon sx={{ fontSize: 40 }} />
                      <div className="flex flex-col">
                        <p className="font-semibold">Just Name</p>
                        <p>13 Jan 2022, 14:00</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <p className="text-white py-1 px-3 bg-slate-800 rounded-lg mx-4">
                        View
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="py-2 flex flex-row items-center space-x-4">
                      <NotificationsActiveOutlinedIcon sx={{ fontSize: 40 }} />
                      <div className="flex flex-col">
                        <p className="font-semibold">Just Name</p>
                        <p>13 Jan 2022, 14:00</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <p className="text-white py-1 px-3 bg-slate-800 rounded-lg mx-4">
                        View
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Incident;
