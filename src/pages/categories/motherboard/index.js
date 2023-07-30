import RootLayout from "../../../../components/Layouts/RootLayout";
import Link from "next/link";

const MotherBoard = ({ allMotherboard }) => {
  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <h1 className="text-black text-center text-2xl m-5 underline decoration-dotted">
          Motherboard Products
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:mt-50">
          {allMotherboard.map((motherboard) => (
            <div key={motherboard?._id} className="w-full h-96">
              <div className="card h-full bg-base-100  shadow-xl">
                <figure className="px-10 pt-15">
                  <img
                    src={motherboard?.image}
                    alt=""
                    className="rounded-xl h-28 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{motherboard?.name}</h2>
                  <div className="badge badge-secondary">
                    {motherboard?.category}
                  </div>
                  <p className="text-xl font-bold">
                    Price: {motherboard?.price}
                  </p>
                  <p className="text-xl font-bold">
                    Status: {motherboard?.status}
                  </p>
                  <p className="text-xl font-bold">
                    Rating: {motherboard?.averagerating}
                  </p>

                  <div className="card-actions">
                    <Link href={`/categories/motherboard/${motherboard?._id}`}>
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

export default MotherBoard;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-server.onrender.com/categories/motherboard",
  );
  const data = await res.json();
  return {
    props: {
      allMotherboard: data,
    },
  };
};

MotherBoard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
