import React, { useState, useEffect, useRef } from "react";
import { dB } from "../../firebase/index";
import { collection, getDocs, addDoc } from "firebase/firestore";
import MainLayout from "../../Components/layout/MainLayout";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Maps } from "../../Components/Maps";

const Incident = () => {
  const [searchValue, setSearchValue] = useState("");
  const [incidentDetails, setIncidentDetails] = useState([]);

  //sperate object that is null initially for location in incident details
  const [locationDetails, setLocationDetails] = useState({
    latitude: null,
    longitude: null,
  });

  //saving incident data
  const [incident, setIncident] = useState([]);
  const incidentCollection = collection(dB, "incidents");

  //get data from db
  useEffect(() => {
    const getIncident = async () => {
      const data = await getDocs(incidentCollection);
      setIncident(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getIncident();
  }, []);

  // search filter
  var filteredList = incident.filter((alarm) => {
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
          <div className="flex flex-row space-x-8">
            <button
              className="bg-emerald-200 py-2 px-4 rounded-full"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              <span className="font-semibold text-xl">Register Incident</span>
            </button>
          </div>
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
                            <p className="font-semibold">{incident.name}</p>
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
                              setIncidentDetails(incident);
                              setLocationDetails(incident.location);
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
                      Victim Name:
                      <span className="text-black text-lg">
                        {incidentDetails.name}
                      </span>
                    </p>
                    {/* <p>
                      Date of alarm:{" "}
                      <span className="text-black text-lg">
                        {incidentDetails.dateTime.map((time) => (
                          <span>{time}</span>
                        ))}
                      </span>
                    </p> */}
                    <p>
                      Statement:{" "}
                      <span className="text-black text-lg">
                        {incidentDetails.statement}
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
          {/* Modal for registering incidents */}
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="registerModal"
            tabIndex="-1"
            aria-labelledby="registerModalTitle"
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
                    Register Incident
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
                        {incidentDetails.name}
                      </span>
                    </p>
                    <p>
                      Date of alarm:{" "}
                      <span className="text-black text-lg">
                        {incidentDetails.date}
                      </span>
                    </p>
                    <p>
                      Phone number:{" "}
                      <span className="text-black text-lg">
                        {incidentDetails.contact}
                      </span>
                    </p>
                    <button
                      className="bg-green-500 text-white rounded px-3 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#locationModal"
                    >
                      {locationDetails.latitude} Location
                    </button>
                  </div>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Save
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
