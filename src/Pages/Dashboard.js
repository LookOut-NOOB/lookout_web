import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Dashboard = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div>
        {/* Sidebar */}
        <Sidebar highlight="dashboard" />

        {/* Main Content */}
        <section className="mainSection">
          <div className="container-md m-5">
            <div class="row">
              <div class="col-md-5">
                <div class="card p-2" style={{ width: "24rem" }}>
                  <div class="card-body">
                    <div className="dashoardCardIcon">
                      <button type="button" class="btn btn-outline-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-bell"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                        </svg>
                      </button>
                    </div>
                    <br />
                    <h5 class="card-title">Active Alarms</h5>
                  </div>
                  <hr />
                  <div class="card-body">
                    <p className="numberText">0</p>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="card p-2" style={{ width: "24rem" }}>
                  <div class="card-body">
                    <div className="dashoardCardIcon">
                      <button type="button" class="btn btn-outline-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box2-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1v3ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                        </svg>
                      </button>
                    </div>
                    <br />
                    <h5 class="card-title">Active Ambulance Requests</h5>
                  </div>
                  <hr />
                  <div class="card-body">
                    <p className="numberText">0</p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div>
              <p class="h4">System Stats</p>
              <hr />
              <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-center">
                  <p class="h6">Total Alarms</p>
                  <p className="statNumber">5</p>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center">
                  <p class="h6">Total Ambulance Requests</p>
                  <p className="statNumber">5</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
