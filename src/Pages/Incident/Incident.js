import React, { useState, useEffect } from "react";
import { dB } from "../../firebase/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import MainLayout from "../../Components/layout/MainLayout";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Maps } from "../../Components/Maps";

const Incident = () => {
  const [searchValue, setSearchValue] = useState(""); //search value state
  const [incidents, setIncidents] = useState([]); //store incident data

  //setting user names
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [userStatement, setUserStatement] = useState("");

  const [user, setUser] = useState([]); //selected user
  const [userData, setUserData] = useState([]); //all users in the db

  //get data from incident collections
  useEffect(() => {
    const getIncidents = async () => {
      const data = await getDocs(collection(dB, "incidents"));
      setIncidents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getUsers = async () => {
      const data = await getDocs(collection(dB, "users"));
      setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getIncidents();
    getUsers();
  }, []);

  const viewIncident = (userId) => {
    userData.map((user) => {
      if (user.id === userId) {
        setUser(user);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        return user;
      } else {
        return true;
      }
    });
  };

  //sperate object that is null initially for location in incident details
  const [locationDetails, setLocationDetails] = useState({
    latitude: 0.3476,
    longitude: 32.5825,
  });

  // search filter
  var filteredList = incidents.filter((alarm) => {
    if (searchValue) {
      return alarm.name.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return alarm;
    }
  });

  return (
    <>
      <MainLayout highlight="incident">
        <section>
          <p className="font-bold text-2xl my-4">Incidents !</p>
          {/* <div className="flex flex-row space-x-8">
            <button
              className="bg-emerald-200 py-2 px-4 rounded-full"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              <span className="font-semibold text-xl">Register Incident</span>
            </button>
          </div> */}
          <div className="bg-emerald-200 py-4 px-6 rounded-2xl my-4">
            <div>
              {/* Search section */}
              <div className="flex justify-center">
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="rounded-full w-3/4 px-3 py-2 my-2"
                />
              </div>
              {/* Incident section */}
              <div className="my-2 mx-4">
                <div className="grid grid-row divide-y-2">
                  {filteredList.map((incident, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center"
                      >
                        <div className="py-2 flex flex-row items-center space-x-4">
                          <NotificationsActiveOutlinedIcon
                            sx={{ fontSize: 40 }}
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold">
                              Incident: {incident.name}
                            </p>
                            {/* <p>
                              {incidentDetails.dateTime.map((time) => (
                                <span>{time}</span>
                              ))}
                            </p> */}
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <button
                            className="text-white py-1 px-3 bg-slate-800 rounded mx-4"
                            onClick={() => {
                              setUserStatement(incident.statement);
                              setLocationDetails(incident.location);
                              viewIncident(incident.userId);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#incidentModal"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Modal for incident details */}
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="incidentModal"
            tabIndex="-1"
            aria-labelledby="incidentModalTitle"
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
                    Incident
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
                      Reporter's Name:
                      <span className="text-black text-lg">
                        {firstName.concat(" ", lastName)}
                      </span>
                    </p>
                    <p>
                      Reporter's Phone:
                      <span className="text-black text-lg">{user.phone}</span>
                    </p>
                    {/* <p>
                      Date of alarm:{" "}
                      <span className="text-black text-lg">
                        {incidentDetails.dateTime.map((time) => (
                          <span>{time}</span>
                        ))}
                      </span>
                    </p>  */}
                    <p>
                      Statement:{" "}
                      <span className="text-black text-lg">
                        {userStatement}
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
          </div>

          {/* Modal for location */}
          <div
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
                  <p>Maps area</p>
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
