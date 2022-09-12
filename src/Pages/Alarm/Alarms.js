import React, { useState, useEffect } from "react";
import { dB } from "../../firebase/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import MainLayout from "../../Components/layout/MainLayout";
import { Maps } from "../../Components/Maps";

import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Alarms = () => {
  //sperate object that is null initially for location in incident details
  const [locationDetails, setLocationDetails] = useState({
    latitude: 0.3476,
    longitude: 32.5825,
  });

  //saving alarm data
  const [alarms, setAlarms] = useState([]); //store alarms data
  const [userData, setUserData] = useState([]); //stored users data
  const [user, setUser] = useState([]); //get userId
  const [userName, setUserName] = useState(" ");

  //get data from db
  useEffect(() => {
    const getAlarms = async () => {
      const data = await getDocs(collection(dB, "alarms"));
      setAlarms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getUsers = async () => {
      const data = await getDocs(collection(dB, "users"));
      setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAlarms();
    getUsers();
  }, []);

  const viewIncident = (userId) => {
    userData.map((user) => {
      if (user.id === userId) {
        setUser(user);
        return user;
      } else {
        return true;
      }
    });
  };

  function getUserName(userId) {
    userData.map((user) => {
      if (user.id === userId) {
        setUserName(user.firstName);
        return user;
      } else return user;
    });
  }
  console.log(userName);

  // state for filtering through data
  const [activeAlarm, setActiveAlarm] = useState("0");
  const [searchValue, setSearchValue] = useState("");

  // state for content on the modal
  var filteredList = alarms.filter((alarm) => {
    if (activeAlarm === "0") {
      return alarm.status === "0";
    }
    if (activeAlarm === "1") {
      return alarm.status === "1";
    } else {
      return alarm;
    }
  });

  // search filter
  filteredList = filteredList.filter((alarm) => {
    if (searchValue) {
      return alarm.name.toLowerCase().includes(searchValue.toLowerCase());
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
                activeAlarm === "0"
                  ? "bg-emerald-800 text-white py-4 px-6 rounded-2xl cursor-pointer border-4 border-gray-800"
                  : "bg-emerald-200 py-4 px-6 rounded-2xl cursor-pointer"
              }
              onClick={() => setActiveAlarm("0")}
            >
              <NotificationsActiveOutlinedIcon sx={{ fontSize: 45 }} />
              <p className="font-semibold text-xl">Active Alarms</p>
            </div>
            <div
              className={
                activeAlarm === "1"
                  ? "bg-emerald-800 text-white py-4 px-6 rounded-2xl cursor-pointer border-4 border-gray-800"
                  : "bg-emerald-200 py-4 px-6 rounded-2xl cursor-pointer"
              }
              onClick={() => setActiveAlarm("1")}
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
                    getUserName(alarms.userId);
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#alarmsModal"
                        onClick={() => {
                          viewIncident(alarms.userId);
                          setLocationDetails(alarms.location);
                          // setUser(alarms.userId);
                        }}
                      >
                        <div className="py-2 flex flex-row items-center space-x-4">
                          <NotificationsActiveOutlinedIcon
                            sx={{ fontSize: 40 }}
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold">userName</p>
                            {/* <p>{alarms.date}</p> */}
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
          {/* Modal for details of the alarm */}
          {/* <div
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
                  <div className="space-y-2 text-gray-400 font-medium">
                    <p>
                      Victim Name:
                      <span className="text-black text-lg">
                        alarmDetails.name
                      </span>
                    </p>
                    <p>
                      Date of alarm:{" "}
                      <span className="text-black text-lg">
                        alarmDetails.date
                      </span>
                    </p>
                    <p>
                      Phone number:{" "}
                      <span className="text-black text-lg">
                        alarmDetails.contact
                      </span>
                    </p>
                    <button
                      className="bg-green-500 text-white rounded px-3 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#locationModal"
                    >
                      Location
                    </button>
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
          </div> */}
          {/* Modal for location */}
          {/* <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="locationModal"
            tabIndex="-1"
            aria-labelledby="locationModalTitle"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-body relative p-4">
                  <Maps
                    type="map"
                    lati={locationDetails.latitude}
                    long={locationDetails.longitude}
                  />
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </MainLayout>
    </>
  );
};

export default Alarms;
