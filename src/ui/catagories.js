import Link from "next/link";

const Category = () => {
  return (
    <div className="100vh">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link href={"/categories/processor"}>
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>

                  <h2 class="title-font font-medium text-xl text-gray-900">
                    CPU / Processor
                  </h2>
                </div>
              </Link>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link href={"/categories/powersupplyunit"}>
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-power text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16"
                    id="IconChangeColor"
                  >
                    {" "}
                    <path
                      d="M7.5 1v7h1V1h-1z"
                      id="mainIconPathAttribute"
                    ></path>{" "}
                    <path
                      d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
                      id="mainIconPathAttribute"
                    ></path>{" "}
                  </svg>

                  <h2 class="title-font font-medium text-xl text-gray-900">
                    Power Supply Unit
                  </h2>
                </div>
              </Link>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link href={"/categories/storagedevice"}>
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>

                  <h2 class="title-font font-medium text-xl text-gray-900">
                    Storage Device
                  </h2>
                </div>
              </Link>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link href={"/categories/monitor"}>
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>

                  <h2 class="title-font font-medium text-xl text-gray-900">
                    Monitor
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link href={"/categories/motherboard"}>
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-motherboard text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16"
                    id="IconChangeColor"
                  >
                    {" "}
                    <path
                      d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3Zm0 1h3v3H5V4Zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z"
                      id="mainIconPathAttribute"
                    ></path>{" "}
                    <path
                      d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11Z"
                      id="mainIconPathAttribute"
                    ></path>{" "}
                  </svg>

                  <h2 class="title-font font-medium text-xl text-gray-900">
                    Motherboard
                  </h2>
                </div>
              </Link>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link href={"/categories/ram"}>
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="IconChangeColor"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  >
                    <path
                      d="M22,0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0ZM6,16a1,1,0,1,1,1-1A1.00115,1.00115,0,0,1,6,16ZM22,6H19.81628a3,3,0,1,0,0,2H22v4H18v2h4v2H20v2h2v4H14V20.81628a3,3,0,1,0-2,0V22H7V17.81628a3,3,0,1,0-2,0V22H2V2H6V8H8V2h2V12h2V2H22ZM18,7a1,1,0,1,1-1-1A1.00115,1.00115,0,0,1,18,7Z"
                      id="mainIconPathAttribute"
                    ></path>
                  </svg>
                  <h2 class="title-font font-medium text-xl text-gray-900">
                    RAM
                  </h2>
                </div>
              </Link>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link href={"/categories/others"}>
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="IconChangeColor"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="1.5"
                  >
                    <path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-xl text-gray-900">
                    Others
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
