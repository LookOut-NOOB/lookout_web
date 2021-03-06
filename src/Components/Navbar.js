/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
  return (
    <div class="live-topbar">
      <a
        class="dashpack-header-sm"
        data-toggle="tooltip"
        data-placement="right"
        href="https://dashboardpack.com/theme-details/directory-dashboard"
        title=""
        data-original-title="View Theme Details"
      >
        Look Out
      </a>
      <h5>
        <b>Dashboard</b>
        {/* <small>Quick</small> */}
      </h5>
      <div class="ms-auto">
        <div class="theme-options theme-options-vis">
          <div>
            <a
              class="btn"
              href="/dashboard"
              data-toggle="tooltip"
              title=""
              data-original-title="View Details"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </a>
            <button type="button" class="btn btn-link">
              Log Out
            </button>
            <span
              data-toggle="tooltip"
              title=""
              data-original-title="Add to cart"
            >
              <a
                href="/dashboard"
                class="btn me-2"
                data-toggle="modal"
                data-target="#purchase-378782"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar