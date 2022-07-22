import React from 'react'
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";


const Reports = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div>
        {/* Sidebar */}
        <Sidebar highlight="report" />

        {/* Main Content */}
        <section className="mainSection">
          <div className="container-md m-5">Reports</div>
        </section>
      </div>
    </>
  );
}

export default Reports