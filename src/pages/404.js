import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div>
      <section className="body px-4 py-32 mx-auto max-w-7xl">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p className="mb-5 text-xl text-left text-rose-800 md:text-3xl uppercase">
              *Error 404*
            </p>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
              Oops! The page you are looking for is not here.
            </h1>
          </div>
          <div>
            <div className="w-full h-full bg-gray-300 rounded-lg">
              <img
                src="https://cdn.wallpapersafari.com/7/28/dREN82.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
