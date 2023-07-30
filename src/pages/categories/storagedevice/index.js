import RootLayout from "../../../../components/Layouts/RootLayout";
import Link from "next/link";

const StorageDevice = ({ allStorageDevice }) => {
  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <h1 className="text-black text-center text-2xl m-5 underline decoration-dotted">
          Storage Device Products
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:mt-50">
          {allStorageDevice?.map((storageDevice) => (
            <div key={storageDevice?._id} className="w-full h-96">
              <div className="card h-full bg-base-100  shadow-xl">
                <figure className="px-10 pt-15">
                  <img
                    alt=""
                    src={storageDevice?.image}
                    className="rounded-xl h-24 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{storageDevice?.name}</h2>
                  <div className="badge badge-secondary">
                    {storageDevice?.category}
                  </div>
                  <p className="text-xl font-bold">
                    Price: {storageDevice?.price}
                  </p>
                  <p className="text-xl font-bold">
                    Status: {storageDevice?.status}
                  </p>
                  <p className="text-xl font-bold">
                    Rating: {storageDevice?.averagerating}
                  </p>

                  <div className="card-actions">
                    <Link
                      href={`/categories/storagedevice/${storageDevice?._id}`}
                    >
                      <button className="btn btn-primary">See More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default StorageDevice;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-server.onrender.com/categories/storagedevice",
  );
  const data = await res.json();
  return {
    props: {
      allStorageDevice: data,
    },
  };
};

StorageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
