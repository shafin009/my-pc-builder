import Link from "next/link";
import RootLayout from "./../../components/Layouts/RootLayout";
import {  signIn } from "next-auth/react";





const Login = () => {
  return <div>
<section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        
          <h1 className="text-center sm:text-3xl text-3xl font-medium title-font m-10 text-gray-900">Login </h1>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       
       
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative flex-grow w-full">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">PassWord</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 mx-auto flex focus:outline-none hover:bg-indigo-600 rounded text-lg">LogIn</button>
        </div>
      </div>
    </section>



 <button onClick={()=>signIn("google",{
    callbackUrl:"http://localhost:3000"
 })} class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign in With Google</button>

<Link href='/signup'>
<button class="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Sign Up </button>
</Link>
 







  </div>;
};

export default Login;



Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
