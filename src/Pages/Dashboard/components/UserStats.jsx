import { useEffect, useState } from "react";
import { dB } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

export const UserStats = () => {
  //Get number of Active users in the system
  //saving user data
  const [user, setuser] = useState([]);
  const userCollection = collection(dB, "users");

  //get data from db
  useEffect(() => {
    const getuser = async () => {
      const data = await getDocs(userCollection);
      setuser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getuser();
  }, []);

  return (
    <div className="rounded-2xl bg-emerald-200 py-2">
      <div className="flex flex-row justify-around my-2">
        <PeopleOutlineIcon sx={{ fontSize: 45 }} />
        <MoreVertIcon sx={{ fontSize: 25 }} />
      </div>
      <div className="flex flex-row my-2 justify-center">
        <p className="text-8xl font-bold mx-1">{user.length}</p>
        <p className="flex items-end p-2 rounded-lg text-lg text-red-600 font-bold">
          Users
        </p>
      </div>
    </div>
  );
};
