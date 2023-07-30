import RootLayout from "../../../../components/Layouts/RootLayout";
import Link from "next/link";

const others = ({ allOthers }) => {
  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <h1 className="text-black text-center text-2xl m-5 underline decoration-dotted">
          Others Products
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:mt-50">
          {allOthers?.map((others) => (
            <div key={others?._id} className="w-full h-96">
              <div className="card h-full bg-base-100  shadow-xl">
                <figure className="px-10 pt-15">
                  <img
                    src={others?.image}
                    alt=""
                    className="rounded-xl h-28 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{others?.name}</h2>
                  <div className="badge badge-secondary">
                    {others?.category}
                  </div>
                  <p className="text-xl font-bold">Price: {others?.price}</p>
                  <p className="text-xl font-bold">Status: {others?.status}</p>
                  <p className="text-xl font-bold">
                    Rating: {others?.averagerating}
                  </p>

                  <div className="card-actions">
                    <Link href={`/categories/others/${others?._id}`}>
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

export default others;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-server.onrender.com/categories/others",
  );
  const data = await res.json();
  return {
    props: {
      allOthers: data,
    },
  };
};

others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
