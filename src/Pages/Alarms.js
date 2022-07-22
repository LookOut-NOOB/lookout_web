import React from 'react'
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Alarms = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div>
        {/* Sidebar */}
        <Sidebar highlight="alarm" />

        {/* Main Content */}
        <section className="mainSection">
          <div className="container-md m-5">
            <p className="h5 text-danger">Active Alarms</p>
            <hr />

            <p>
              <small>No Active Alarms</small>
            </p>
            <br />

            <p className="h4">Alarms</p>
            <hr />
            <div className="container ms-3">
              <small>Victim Name:</small> <strong>Keith</strong>
              <br />
              <small>Date: 2022-03-21 08:31:06.407</small>
              <hr />
              <small>Victim Name:</small> <strong>Raymond</strong>
              <br />
              <small>Date: 2022-05-01 13:46:06.407</small>
              <hr />
              <small>Victim Name:</small> <strong>Nancy</strong>
              <br />
              <small>Date: 2022-06-15 20:55:06.669</small>
              <hr />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Alarms