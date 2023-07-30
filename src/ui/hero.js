import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://pcbros.tech/cdn/shop/products/PXL_20220407_135813056.PORTRAIT.jpg?v=1649355485&width=3979)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
            <h4 className="mb-5 text-2xl">
              Build Your Dream PC - Choose, Customize, Create. Unleash Your
              Power with Our High-Quality Components and Expert Guides. Start
              Building Today!
            </h4>
            <Link href="/pcbuilder">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
