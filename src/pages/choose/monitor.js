/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "./../../../components/Layouts/RootLayout";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../redux/slices/pcBuilderSlice";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const monitor = ({ allMonitor }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectMonitor = (selectedMonitor) => {
    dispatch(
      setSelectedProduct({
        category: "Monitor",
        product: selectedMonitor,
      }),
    );
    toast.success("Successfully Added Monitor", {
      position: "top-center",
    });

    router.push("/pcbuilder");
  };

  return (
    <div>
      <div>
        <div>
          <br />
          <br />
          <br />
          <h1 className="text-black text-center text-2xl m-5 underline decoration-dotted">
            Choose Monitor
          </h1>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:mt-50">
            {allMonitor?.map((monitor) => (
              <div key={monitor?._id} className="w-full h-96">
                <div className="card h-full bg-base-100  shadow-xl">
                  <figure className="px-10 pt-15">
                    <img
                      src={monitor?.image}
                      alt=""
                      className="rounded-xl h-28 object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{monitor?.name}</h2>
                    <div className="badge badge-secondary">
                      {monitor?.category}
                    </div>
                    <p className="text-xl font-bold">Price: {monitor?.price}</p>
                    <p className="text-xl font-bold">
                      Status: {monitor?.status}
                    </p>
                    <p className="text-xl font-bold">
                      Rating: {monitor?.averagerating}
                    </p>

                    <div className="card-actions">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleSelectMonitor(monitor)}
                      >
                        Choose
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Toaster />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default monitor;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-server.onrender.com/categories/monitor",
  );
  const data = await res.json();
  return {
    props: {
      allMonitor: data,
    },
  };
};

monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
