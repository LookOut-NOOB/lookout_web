import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { UserAuth } from "../../contexts/AuthContext";

const Sidebar = ({ highlight }) => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  let dashboard = false;
  let alarm = false;
  let incident = false;
  let ambulance = false;
  let contacts = false;
  let locations = false;

  switch (highlight) {
    case "dashboard":
      dashboard = true;
      break;
    case "alarm":
      alarm = true;
      break;
    case "incident":
      incident = true;
      break;
    case "ambulance":
      ambulance = true;
      break;
    case "contacts":
      contacts = true;
      break;
    case "locations":
      locations = true;
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center h-screen fixed justify-center">
      <div className="">
        <div
          className="grid grid-rows-6 w-60 h-full shadow-md bg-black text-white font-semibold
         text-lg p-8 rounded-2xl"
        >
          <ul className="relative space-y-6 row-span-5">
            <li className="mb-8 text-2xl">LookOut</li>
            <li
              className={
                dashboard ? "relative underline decoration-white" : "relative"
              }
            >
              <Link
                className="flex items-center overflow-hidden"
                to="/dashboard"
              >
                <HomeOutlinedIcon className="text-white" />
                <span className="text-white mx-2">Home</span>
              </Link>
            </li>
            <li
              className={
                alarm ? "relative underline decoration-white" : "relative"
              }
            >
              <Link className="flex items-center overflow-hidden" to="/alarms">
                <NotificationsActiveOutlinedIcon className="text-white" />
                <span className="text-white mx-2">Alarms</span>
              </Link>
            </li>
            <li
              className={
                incident ? "relative underline decoration-white" : "relative"
              }
            >
              <Link
                className="flex items-center overflow-hidden"
                to="/incident"
              >
                <SummarizeOutlinedIcon className="text-white" />
                <span className="text-white mx-2">Incident</span>
              </Link>
            </li>
            <li
              className={
                contacts ? "relative underline decoration-white" : "relative"
              }
            >
              <Link
                className="flex items-center overflow-hidden"
                to="/contacts"
              >
                <PermContactCalendarOutlinedIcon className="text-white" />
                <span className="text-white mx-2">Contacts</span>
              </Link>
            </li>
            <li
              className={
                ambulance ? "relative underline decoration-white" : "relative"
              }
            >
              <Link
                className="flex items-center overflow-hidden"
                to="/ambulance"
              >
                <MedicationOutlinedIcon className="text-white" />
                <span className="text-white mx-2">Ambulance</span>
              </Link>
            </li>
            <li
              className={
                locations ? "relative underline decoration-white" : "relative"
              }
            >
              <Link
                className="flex items-center overflow-hidden"
                to="/community"
              >
                <LocationOnOutlinedIcon className="text-white" />
                <span className="text-white mx-2">Location</span>
              </Link>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="row-span-1 flex items-end justify-center hover:text-xl"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
