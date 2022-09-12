import { useEffect, useState } from "react";
import { dB } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const AmbulanceStats = () => {
  //Get number of Active ambulances in the system
  //saving ambulance data
  const [ambulance, setambulance] = useState([]);
  const ambulanceCollection = collection(dB, "ambulances");

  //get data from db
  useEffect(() => {
    const getambulance = async () => {
      const data = await getDocs(ambulanceCollection);
      setambulance(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getambulance();
  }, []);
  return (
    <div className="rounded-2xl bg-emerald-200 py-2">
      <div className="flex flex-row justify-around my-2">
        <MedicationOutlinedIcon sx={{ fontSize: 45 }} />
        <MoreVertIcon sx={{ fontSize: 25 }} />
      </div>
      <div className="text-center">
        <p className="text-8xl font-bold mx-1">{ambulance.length}</p>
        <p className="p-2 rounded-lg text-lg text-red-600 font-bold">
          Ambulances Registered
        </p>
      </div>
    </div>
  );
};
