import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Sidebar = ({ highlight }) => {
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
    <div className="fixed">
      <div className="grid grid-rows-6 w-60 h-full shadow-md bg-black text-white font-semibold text-xl p-8 rounded-2xl">
        <ul className="relative space-y-6 row-span-5">
          <li className="mb-8 text-2xl">LookOut</li>
          <li
            className={
              dashboard ? "relative underline decoration-white" : "relative"
            }
          >
            <a className="flex items-center overflow-hidden" href="/dashboard">
              <HomeOutlinedIcon className="text-white" />
              <span className="text-white mx-2">Home</span>
            </a>
          </li>
          <li
            className={
              alarm ? "relative underline decoration-white" : "relative"
            }
          >
            <a className="flex items-center overflow-hidden" href="/alarms">
              <NotificationsActiveOutlinedIcon className="text-white" />
              <span className="text-white mx-2">Alarms</span>
            </a>
          </li>
          <li
            className={
              incident ? "relative underline decoration-white" : "relative"
            }
          >
            <a className="flex items-center overflow-hidden" href="/incident">
              <SummarizeOutlinedIcon className="text-white" />
              <span className="text-white mx-2">Incident</span>
            </a>
          </li>
          <li
            className={
              contacts ? "relative underline decoration-white" : "relative"
            }
          >
            <a className="flex items-center overflow-hidden" href="/contacts">
              <PermContactCalendarOutlinedIcon className="text-white" />
              <span className="text-white mx-2">Contacts</span>
            </a>
          </li>
          <li
            className={
              ambulance ? "relative underline decoration-white" : "relative"
            }
          >
            <a className="flex items-center overflow-hidden" href="/ambulance">
              <MedicationOutlinedIcon className="text-white" />
              <span className="text-white mx-2">Ambulance</span>
            </a>
          </li>
          <li
            className={
              locations ? "relative underline decoration-white" : "relative"
            }
          >
            <a className="flex items-center overflow-hidden" href="/location">
              <LocationOnOutlinedIcon className="text-white" />
              <span className="text-white mx-2">Location</span>
            </a>
          </li>
        </ul>
        <button className="row-span-1 flex items-end justify-center">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
