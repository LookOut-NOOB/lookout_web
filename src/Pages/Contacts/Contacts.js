import MainLayout from "../../Components/layout/MainLayout";

const Contacts = () => {
  return (
    <>
      <MainLayout highlight="contacts">
        <section>
          <p className="font-bold text-2xl my-4">Contacts !</p>
          <div className="flex flex-row space-x-8">
            <div className="bg-emerald-200 py-2 px-4 rounded-full">
              <p className="font-semibold text-xl">Register Contact</p>
            </div>
          </div>
          <div className="bg-emerald-200 py-4 px-6 rounded-2xl my-4 h-80">
            <div className="grid grid-cols-4 gap-y-4">
              {/* title content */}
              <div className="font-bold">District</div>
              <div className="font-bold">County</div>
              <div className="font-bold">Sub-county</div>
              <div className="font-bold">Contacts</div>
              {/* content per title */}
              <div>Kampala</div>
              <div>Makerere</div>
              <div>Kikumi Kikumi</div>
              <div>
                <ul>
                  <li>LC1: Mr. Edwin, 078074638497</li>
                  <li>Police: Mr. Moses, 0774993745</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Contacts;
