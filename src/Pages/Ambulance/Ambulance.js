import React, { useState, useEffect, useRef } from "react";
import { dB } from "../../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import MainLayout from "../../Components/layout/MainLayout";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";

const Ambulance = () => {
  //get new ambulance details
  const newNameRef = useRef();
  const newPhoneRef = useRef();
  const newLocationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = newNameRef.current.value;
    const newPhone = newPhoneRef.current.value;
    const newLocation = newLocationRef.current.value;

    const addAmbulance = async () => {
      await addDoc(ambulanceCollection, {
        name: newName,
        phone: newPhone,
        location: newLocation,
        status: 1,
      });
      window.location.reload();
    };

    addAmbulance();
  };

  //saving ambulance data
  const [ambulance, setAmbulance] = useState([]);
  const ambulanceCollection = collection(dB, "ambulances");

  //get data from db
  useEffect(() => {
    const getAmbulance = async () => {
      const data = await getDocs(ambulanceCollection);
      setAmbulance(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAmbulance();
  }, []);

  //saving details for the Modal
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();

  return (
    <>
      <MainLayout highlight="ambulance">
        <section>
          <p className="font-bold text-2xl my-4">Ambulance !</p>
          <div className="flex flex-row space-x-8">
            <div className="bg-emerald-200 py-2 px-4 rounded-full">
              <button
                className="font-semibold text-xl"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Register Ambulance
              </button>
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
                  {ambulance.map((ambulance, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between items-center"
                    >
                      <div className="py-2 flex flex-row items-center space-x-4">
                        <MedicationOutlinedIcon sx={{ fontSize: 40 }} />
                        <div className="flex flex-col">
                          <p className="font-semibold">{ambulance.name}</p>
                          <p className="text-gray-600 text-sm font-semibold">
                            Contact: <span>{ambulance.phone}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <button
                          className="text-white py-1 px-3 bg-slate-800 rounded-lg mx-4"
                          data-bs-toggle="modal"
                          data-bs-target="#ambulanceModal"
                          onClick={() => {
                            setName(ambulance.name);
                            setLocation(ambulance.location);
                            setPhone(ambulance.phone);
                          }}
                        >
                          View
                        </button>
                        {/* <StarIcon sx={{ fontSize: 25 }} />
                        <StarIcon sx={{ fontSize: 25 }} />
                        <StarIcon sx={{ fontSize: 25 }} />
                        <StarIcon sx={{ fontSize: 25 }} />
                        <StarIcon sx={{ fontSize: 25 }} /> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Modal for details of the alarm */}
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="ambulanceModal"
            tabIndex="-1"
            aria-labelledby="ambulanceModalTitle"
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
                      Ambulance Name:
                      <span className="text-black text-lg">{name}</span>
                    </p>
                    <p>
                      Phone number:{" "}
                      <span className="text-black text-lg">{phone}</span>
                    </p>
                    <p>
                      Location
                      <span className="text-black text-lg">{location}</span>
                    </p>
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

          {/* Modal for registering */}
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="registerModal"
            tabIndex="-1"
            aria-labelledby="registerModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="text-xl font-medium leading-normal text-gray-800"
                    id="registerModalLabel"
                  >
                    Register new contact
                  </h5>
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none
                     opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 
                     hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                {/* Register Ambulance Modal */}
                <form onSubmit={handleSubmit}>
                  <div className="modal-body relative p-4 space-y-4">
                    <input
                      type="text"
                      placeholder="Ambulance company"
                      className="w-full p-2 border border-gray-300"
                      ref={newNameRef}
                    />
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="w-full p-2 border border-gray-300"
                      ref={newPhoneRef}
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full p-2 border border-gray-300"
                      ref={newLocationRef}
                    />
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
                    uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    >
                      Save Contact
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Ambulance;
