/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "./../../../components/Layouts/RootLayout";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../redux/slices/pcBuilderSlice";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const RAM = ({ allRam }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectRam = (selectedRam) => {
    dispatch(
      setSelectedProduct({
        category: "Ram",
        product: selectedRam,
      }),
    );
    toast.success("Successfully Added RAM", {
      position: "top-center",
    });
    router.push("/pcbuilder");
  };

  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <h1 className="text-black text-center text-2xl m-5 underline decoration-dotted">
          RAM Products
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:mt-50">
          {allRam?.map((ram) => (
            <div key={ram._id} className="w-full h-96">
              <div className="card h-full bg-base-100  shadow-xl">
                <figure className="px-10 pt-15">
                  <img
                    src={ram?.image}
                    alt=""
                    className="rounded-xl h-28 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{ram?.name}</h2>
                  <div className="badge badge-secondary">{ram?.category}</div>
                  <p className="text-xl font-bold">Price: {ram?.price}</p>
                  <p className="text-xl font-bold">Status: {ram?.status}</p>
                  <p className="text-xl font-bold">
                    Rating: {ram?.averagerating}
                  </p>

                  <div className="card-actions">
                    <button
                      onClick={() => handleSelectRam(ram)}
                      className="btn btn-primary"
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
  );
};

export default RAM;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-server.onrender.com/categories/ram",
  );
  const data = await res.json();
  return {
    props: {
      allRam: data,
    },
  };
};

RAM.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
