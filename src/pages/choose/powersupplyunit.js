import RootLayout from "./../../../components/Layouts/RootLayout";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../redux/slices/pcBuilderSlice";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const PowerSupplyUnit = ({ allPowerSupplyUnit }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectPowerSupplyUnit = (selectedPowerSupplyUnit) => {
    dispatch(
      setSelectedProduct({
        category: "PowerSupplyUnit",
        product: selectedPowerSupplyUnit,
      }),
    );

    toast.success("Successfully Added Power Supply Unit", {
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
          Choose Power Supply Unit
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:mt-50">
          {allPowerSupplyUnit?.map((PowerSupplyUnit) => (
            <div key={PowerSupplyUnit?._id} className="w-full h-96">
              <div className="card h-full bg-base-100  shadow-xl">
                <figure className="px-10 pt-15">
                  <img
                    src={PowerSupplyUnit?.image}
                    alt=""
                    className="rounded-xl h-28 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{PowerSupplyUnit?.name}</h2>
                  <div className="badge badge-secondary">
                    {PowerSupplyUnit?.category}
                  </div>
                  <p className="text-xl font-bold">
                    Price: {PowerSupplyUnit?.price}
                  </p>
                  <p className="text-xl font-bold">
                    Status: {PowerSupplyUnit?.status}
                  </p>
                  <p className="text-xl font-bold">
                    Rating: {PowerSupplyUnit?.averagerating}
                  </p>

                  <div className="card-actions">
                    <button
                      onClick={() =>
                        handleSelectPowerSupplyUnit(PowerSupplyUnit)
                      }
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

export default PowerSupplyUnit;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-server.onrender.com/categories/powersupplyunit",
  );
  const data = await res.json();
  return {
    props: {
      allPowerSupplyUnit: data,
    },
  };
};

PowerSupplyUnit.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
