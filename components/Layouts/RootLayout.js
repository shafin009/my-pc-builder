import Link from "next/link";
import { useSession, signOut } from "next-auth/react";



const RootLayout = ({ children }) => {

  const { data: session } = useSession()
  return (
    <div>
      <div className="navbar bg-white  text-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 "
            >
              <li>
                <p>PC-Builder</p>
              </li>
              <li>
                <p>Categories</p>
                <ul className="p-2">
                  <li>
                    <Link href="/categories/processor">
                      <p>CPU/Processor</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/motherboard">
                      <p>Motherboard</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/ram">
                      <p>RAM</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/powersupplyunit">
                      <p>Power Supply Unit</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/storagedevice">
                      <p>Storage Device</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/monitor">
                      <p>Monitor</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/others">
                      <p>Others</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            My PC Store
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex bg-white">
          <ul className="menu menu-horizontal px-1 bg-white">
            <li>
              <Link href="/pcbuilder">
                <p>PC-Builder</p>
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/categories/processor">
                      <p>CPU/Processor</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/motherboard">
                      <p>Motherboard</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/ram">
                      <p>RAM</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/powersupplyunit">
                      <p>Power Supply Unit</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/storagedevice">
                      <p>Storage Device</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/monitor">
                      <p>Monitor</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/others">
                      <p>Others</p>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
       {
        session?.user?(
        <div className="navbar-end">
        
           <p onClick={()=>signOut()} className="btn">Log Out</p>
          
         
        </div>)
        : 
        (<div className="navbar-end">
          <Link href='/login'>
           <p className="btn">Log IN</p>
          </Link>
         
        </div>
        )}
      </div>
      <br />
      <br />
      <div >{children}</div>
      <br />
      <br />
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by My PC Store</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
