import MainLayout from "../../Components/layout/MainLayout";
import { Maps } from "../../Components/Maps";
import ContactTable from "./components/ContactTable";
import Location from "./components/Location";

const Contacts = () => {
  return (
    <>
      <MainLayout highlight="contacts">
        <section>
          <p className="font-bold text-2xl my-4">Contacts !</p>
          <div className="flex flex-row space-x-8">
            <button
              className="bg-emerald-200 py-2 px-4 rounded-lg"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              <p className="font-semibold text-xl">Register Contact</p>
            </button>
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

                {/* Body of the modal */}
                <div className="modal-body relative p-4 space-y-4">
                  <input
                    type="text"
                    placeholder="Name of contact"
                    className="w-full p-2 border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Title of Contact"
                    className="w-full p-2 border border-gray-300"
                  />
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="w-full p-2 border border-gray-300"
                  />
                  <Maps type="location" />
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
              </div>
            </div>
          </div>
          {/* Table of content */}
          <ContactTable />
        </section>
      </MainLayout>
    </>
  );
};

export default Contacts;
