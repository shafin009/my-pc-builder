import RootLayout from "../../../../components/Layouts/RootLayout";

const storageDevice = ({ storagedeviceData }) => {
  return (
    <div>
      <div>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                src={storagedeviceData?.image}
                alt=""
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-700 tracking-widest">
                  {storagedeviceData?.category}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {storagedeviceData?.name}
                </h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    IR: {storagedeviceData?.indivisualrating}
                    <span class="text-gray-600 ml-3">
                      AR: {storagedeviceData?.averagerating}
                    </span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    {storagedeviceData?.status}
                  </span>
                </div>
                <p class="leading-relaxed">{storagedeviceData?.description}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div class="flex">
                    <span class="mr-3">keyfeatures:</span>
                    <p class="ml-1 text-black w-6 h-6">
                      {storagedeviceData?.keyfeatures}
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    {storagedeviceData?.price}
                  </span>
                  {/* <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add to PC Builder
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <h1 className="text-center text-black m-3 text-3xl">
          Reviews of Product
        </h1>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-8 mx-auto">
            {storagedeviceData?.reviews.map((review, index) => (
              <div
                key={index}
                class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="inline-block w-8 h-8 text-gray-400 mb-8"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed text-lg">{review}</p>
                <span class="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default storageDevice;

storageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-backend-server.onrender.com/categories/storagedevice",
  );
  const storagedevices = await res.json();

  const paths = storagedevices.map((storagedevice) => ({
    params: { storagedeviceid: storagedevice._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-backend-server.onrender.com/categories/storagedevice/${params.storagedeviceid}`,
  );
  const data = await res.json();
  return {
    props: {
      storagedeviceData: data,
    },
  };
};
