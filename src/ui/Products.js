import RootLayout from "./../../components/Layouts/RootLayout";
import Link from "next/link";

const Products = ({ allProducts }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      {allProducts?.slice(2, 8).map((product) => (
        <div key={product?._id} className="w-full h-96">
          <div className="card h-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={product?.image}
                alt=""
                className="rounded-xl h-28 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product?.name}</h2>
              <div className="badge badge-secondary">{product?.category}</div>
              <p className="text-xl font-bold">Price: {product?.price}</p>
              <p className="text-xl font-bold">Status: {product?.status}</p>
              <p className="text-xl font-bold">
                Rating: {product?.averagerating}
              </p>

              <div className="card-actions">
                <Link href={`/product/${product?._id}`}>
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
