import RootLayout from "./../../components/Layouts/RootLayout";
import Link from "next/link";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const PCBuilder = () => {
  const [isLoading, setIsLoading] = useState(false);

  const isAllComponentsSelected = () => {
    const requiredCategories = [
      "Processor",
      "Ram",
      "Monitor",
      "Motherboard",
      "PowerSupplyUnit",
      "StorageDevice",
    ];

    return requiredCategories.every(
      (category) =>
        Array.isArray(selectedProduct?.[category]) &&
        selectedProduct[category].length > 0,
    );
  };
  const selectedProduct = useSelector(
    (state) => state?.pcBuilder?.selectedProduct,
  );

  const buildPC = (event) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.reload();
    }, 1000);
    event.preventDefault();
    toast.success("Successfully Built PC", {
      duration: 3000,
      position: "top-center",
    });
  };

 const isCategorySelected = (category) => {
    return (
      selectedProduct &&
      Array.isArray(selectedProduct[category]) &&
      selectedProduct[category].length > 0
    );
  };



 const disabledButtonClass = "flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none rounded text-lg";
  const enabledButtonClass = "flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none rounded text-lg";
  return (
    <div>
      <h1 className="text-center text-4xl m-10 underline ">PC BUILDER</h1>
      <br />
      <br />
      <br />

      <span className="grid grid-cols-2 justify-evenly gap-4 items-center pb-8">
        <h1 className="text-xl m-5 text-center underline">Category Name</h1>

        <h1 className="text-xl m-5 text-center underline">Select Button</h1>
      </span>

      <div>
        <span className="grid grid-cols-2 justify-evenly gap-4 items-center">
          <h1 className="text-md m-5 text-center font-serif font-bold underline decoration-wavy">
            CPU/Processor
          </h1>

         {!isCategorySelected("Processor") ? (
          <Link href="/choose/processor">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Select
            </button>
          </Link>
        ) : (
          <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg" disabled>
            Selected
          </button>
        )}
        </span>

        {Array.isArray(selectedProduct?.["Processor"]) &&
          selectedProduct?.["Processor"].map((product) => (
            <div key={product?._id} className="p-10  ">
              <div className="w-full lg:max-w-fit lg:mx-auto lg:flex">
                <div
                  className="h-52 lg:h-auto lg:w-44 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url('${product?.image}')` }}
                  title="Mountain"
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      {product?.category}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {product?.name}
                    </div>
                    <p className="text-gray-700 text-base">
                      Product Status: {product?.status}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Product Price: {product?.price}
                      </p>
                      <p className="text-gray-900">
                        Product Rating: {product?.averagerating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div>
        <span className="grid grid-cols-2 justify-evenly gap-4 items-center">
          <h1 className="text-md m-5 text-center font-serif font-bold underline decoration-wavy ">
            RAM
          </h1>
{!isCategorySelected("Ram") ? (
          <Link href="/choose/ram">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Select
            </button>
          </Link>
        ) : (
          <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg" disabled>
            Selected
          </button>
        )}
         
        </span>

        {Array.isArray(selectedProduct?.["Ram"]) &&
          selectedProduct?.["Ram"].map((product) => (
            <div key={product?._id} className="p-10  ">
              <div className="w-full lg:max-w-fit lg:mx-auto lg:flex">
                <div
                  className="h-52 lg:h-auto lg:w-44 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url('${product?.image}')` }}
                  title="Mountain"
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      {product?.category}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {product?.name}
                    </div>
                    <p className="text-gray-700 text-base">
                      Product Status: {product?.status}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Product Price: {product?.price}
                      </p>
                      <p className="text-gray-900">
                        Product Rating: {product?.averagerating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <span className="grid grid-cols-2 justify-evenly gap-4 items-center">
          <h1 className="text-md m-5 text-center font-serif font-bold underline decoration-wavy">
            Monitor
          </h1>

{!isCategorySelected("Monitor") ? (
             <Link href="/choose/monitor">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Select
            </button>
          </Link>
        ) : (
          <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg" disabled>
            Selected
          </button>
        )}





          
        </span>

        {Array.isArray(selectedProduct?.["Monitor"]) &&
          selectedProduct?.["Monitor"].map((product) => (
            <div key={product?._id} className="p-10  ">
              <div className="w-full lg:max-w-fit lg:mx-auto lg:flex">
                <div
                  className="h-52 lg:h-auto lg:w-44 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url('${product?.image}')` }}
                  title="Mountain"
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      {product?.category}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {product?.name}
                    </div>
                    <p className="text-gray-700 text-base">
                      Product Status: {product?.status}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Product Price: {product?.price}
                      </p>
                      <p className="text-gray-900">
                        Product Rating: {product?.averagerating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <span className="grid grid-cols-2 justify-evenly gap-4 items-center">
          <h1 className="text-md m-5 text-center font-serif font-bold underline decoration-wavy">
            Motherboard
          </h1>

{!isCategorySelected("Motherboard") ? (
             <Link href="/choose/motherboard">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Select
            </button>
          </Link>
        ) : (
          <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg" disabled>
            Selected
          </button>
        )}



        </span>

        {Array.isArray(selectedProduct?.["Motherboard"]) &&
          selectedProduct?.["Motherboard"].map((product) => (
            <div key={product?._id} className="p-10  ">
              <div className="w-full lg:max-w-fit lg:mx-auto lg:flex">
                <div
                  className="h-52 lg:h-auto lg:w-44 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url('${product?.image}')` }}
                  title="Mountain"
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      {product?.category}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {product?.name}
                    </div>
                    <p className="text-gray-700 text-base">
                      Product Status: {product?.status}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Product Price: {product?.price}
                      </p>
                      <p className="text-gray-900">
                        Product Rating: {product?.averagerating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <span className="grid grid-cols-2 justify-evenly gap-4 items-center">
          <h1 className="text-md m-5 text-center font-serif font-bold underline decoration-wavy">
            Power Supply Unit
          </h1>


{!isCategorySelected("PowerSupplyUnit") ? (
             <Link href="/choose/powersupplyunit">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Select
            </button>
          </Link>
        ) : (
          <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg" disabled>
            Selected
          </button>
        )}


         
        </span>

        {Array.isArray(selectedProduct?.["PowerSupplyUnit"]) &&
          selectedProduct?.["PowerSupplyUnit"].map((product) => (
            <div key={product?._id} className="p-10  ">
              <div className="w-full lg:max-w-fit lg:mx-auto lg:flex">
                <div
                  className="h-52 lg:h-auto lg:w-44 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url('${product?.image}')` }}
                  title="Mountain"
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      {product?.category}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {product?.name}
                    </div>
                    <p className="text-gray-700 text-base">
                      Product Status: {product?.status}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Product Price: {product?.price}
                      </p>
                      <p className="text-gray-900">
                        Product Rating: {product?.averagerating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <span className="grid grid-cols-2 justify-evenly gap-4 items-center">
          <h1 className="text-md m-5 text-center font-serif font-bold underline decoration-wavy">
            Storage Device
          </h1>

{!isCategorySelected("StorageDevice") ? (
             <Link href="/choose/storagedevice">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Select
            </button>
          </Link>
        ) : (
          <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg" disabled>
            Selected
          </button>
        )}



          
        </span>

        {Array.isArray(selectedProduct?.["StorageDevice"]) &&
          selectedProduct?.["StorageDevice"].map((product) => (
            <div key={product?._id} className="p-10  ">
              <div className="w-full lg:max-w-fit lg:mx-auto lg:flex">
                <div
                  className="h-52 lg:h-auto lg:w-44 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url('${product?.image}')` }}
                  title="Mountain"
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      {product?.category}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {product?.name}
                    </div>
                    <p className="text-gray-700 text-base">
                      Product Status: {product?.status}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Product Price: {product?.price}
                      </p>
                      <p className="text-gray-900">
                        Product Rating: {product?.averagerating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <span className="grid grid-cols-2 justify-evenly gap-4 items-center pt-8">
        <h1 className="text-md m-5 text-center underline">Build My PC</h1>

       <button
          disabled={!isAllComponentsSelected()}
          onClick={(event) => buildPC(event)}
          className={
            isAllComponentsSelected() ? enabledButtonClass : disabledButtonClass
          }
        >
          Build Start
        </button>
      </span>

      <Toaster />
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
