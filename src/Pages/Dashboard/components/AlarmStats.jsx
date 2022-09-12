import { useEffect, useState } from "react";
import { dB } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const AlarmStats = () => {
  //Get number of Active alarms in the system
  //saving alarm data
  const [alarm, setAlarm] = useState([]);
  const alarmCollection = collection(dB, "alarms");

  //get data from db
  useEffect(() => {
    const getAlarm = async () => {
      const data = await getDocs(alarmCollection);
      setAlarm(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAlarm();
  }, []);

  //filter through alarm details
  var filteredList = alarm.filter((alarm) => {
    return alarm.status === "0";
  });

  return (
    <div className="rounded-2xl bg-emerald-200 py-2">
      <div className="flex flex-row justify-around my-2">
        <NotificationsActiveOutlinedIcon sx={{ fontSize: 45 }} />
        <MoreVertIcon sx={{ fontSize: 25 }} />
      </div>
      <div className="flex flex-row my-2 justify-center">
        <p className="text-8xl font-bold mx-1">{filteredList.length}</p>
        <p className="flex items-end p-2 rounded-lg text-lg text-red-600 font-bold">
          Active Alarm
        </p>
      </div>
    </div>
  );
};
