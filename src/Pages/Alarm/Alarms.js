import React, { useState } from "react";
import MainLayout from "../../Components/layout/MainLayout";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AlarmData from "./components/Alarms.json";

const Alarms = () => {
  // state for filtering through data
  const [activeAlarm, setActiveAlarm] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  // state for content on the modal
  const [alarmDetails, setAlarmDetails] = useState([]);

  let filterTrial = AlarmData.filter((alarm) => alarm.status);
  console.log(filterTrial);

  var filteredList = AlarmData.filter((alarm) => {
    if (activeAlarm) {
      return alarm.status;
    }
    if (searchValue) {
      return alarm.name.toLowerCase().includes(searchValue.toLowerCase());
    }
    if (!activeAlarm) {
      return !alarm.status;
    } else {
      return alarm;
    }
  });

  return (
    <>
      <MainLayout highlight="alarm">
        <section>
          <p className="font-bold text-2xl my-4">Alarms !</p>
          {/* Buttons for categorizing */}
          <div className="justify-center text-center flex flex-row space-x-8">
            <div
              className={
                activeAlarm
                  ? "bg-emerald-800 text-white py-4 px-6 rounded-2xl cursor-pointer border-4 border-gray-800"
                  : "bg-emerald-200 py-4 px-6 rounded-2xl cursor-pointer"
              }
              onClick={() => setActiveAlarm(true)}
            >
              <NotificationsActiveOutlinedIcon sx={{ fontSize: 45 }} />
              <p className="font-semibold text-xl">Active Alarms</p>
            </div>
            <div
              className={
                !activeAlarm
                  ? "bg-emerald-800 text-white py-4 px-6 rounded-2xl cursor-pointer border-4 border-gray-800"
                  : "bg-emerald-200 py-4 px-6 rounded-2xl cursor-pointer"
              }
              onClick={() => setActiveAlarm(false)}
            >
              <NotificationsOffOutlinedIcon sx={{ fontSize: 45 }} />
              <p className="font-semibold text-xl">Closed Alarms</p>
            </div>
          </div>
          <div className="bg-emerald-200 py-4 px-6 rounded-2xl my-4">
            {/* Search bar */}
            <div>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-full w-3/4 px-3 py-2 my-2"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              {/* List of Alarms */}
              <div className="my-2 mx-4">
                <div className="grid grid-row divide-y-2">
                  {filteredList.map((alarms, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#alarmsModal"
                        onClick={() => setAlarmDetails(alarms)}
                      >
                        <div className="py-2 flex flex-row items-center space-x-4">
                          <NotificationsActiveOutlinedIcon
                            sx={{ fontSize: 40 }}
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold">{alarms.name}</p>
                            <p>{alarms.date}</p>
                          </div>
                        </div>
                        <div>
                          <MoreVertIcon sx={{ fontSize: 25 }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="alarmsModal"
            tabIndex="-1"
            aria-labelledby="alarmsModalTitle"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalScrollableLabel"
                  >
                    Alarm
                  </h5>
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body relative p-4">
                  <div>
                    <p>{alarmDetails.name}</p>
                    <p>{alarmDetails.date}</p>
                    <p>{alarmDetails.contact}</p>
                    <p>{alarmDetails.location}</p>
                  </div>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Alarms;
