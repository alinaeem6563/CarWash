import Footer from "./components/footer/Footer";
import Location from "./components/locations/Location";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";

function App() {
  return (
    <div 
    className="min-h-screen bg-gradient-to-b from-[#07a5fe] to-[#275dfd] pt-2 ">
      <Navbar />
      <main className="mx-auto max-w-5xl">
        <section
          id="home"
          className="overflow-hidden text-white max-w-3/4 mx-auto gap-8 justify-center items-center flex sm:flex-row flex-col "
        ><div className="max-w-full">
            <img
              src="./src/images/car_1.png"
              alt="car"
              className="hidden sm:block pb-6 mb-2 -mt-28 max-w-1/2 mx-auto"
            />
            <img
              src="./src/images/car.png"
              alt="car"
              className="block sm:hidden pb-6 mb-2 -mt-28 max-w-1/2 mx-auto"
            />
          </div>
          <article
            className="w-2/3 sm:pl-14 pl-10 md:pt-24
        "
          >
            <h2 className="text-5xl sm:text-6xl font-bold  mb-2">
              BEST CAR WASHING
            </h2>
            <p className=" text-sm mb-2 ">
              Serving the Ohio community since 1995
            </p>
            <button className="bg-[#051f42] font-medium py-3 px-6 ">
              BECOME A MEMBER
            </button>
          </article>
          
        </section>
        <section id="contact" className=" scroll-m-10 mx-2 max-w-full  my-8">
          <ul className="flex flex-col sm:flex-row list-none items-center  mx-auto ">
            <li className="sm:w-1/3 w-1/2 my-2  p-2 text-center border border-white ">
              <h2 className="text-sm text-cyan-300">PHONE</h2>
              <a href="tel:+8801714457298" className="text-white underline">
                +8801714457298
              </a>
            </li>
            <li className="sm:w-1/3 w-1/2 my-2 p-2 text-center border border-white ">
              <h2 className="text-sm text-cyan-300">Email</h2>
              <a
                href="mailto:hello@carservice.com"
                className="text-white underline"
              >
                hello@carservice.com
              </a>
            </li>
            <li className="sm:w-1/3 w-1/2 my-2 p-2 text-center border border-white">
              <h2 className="text-sm text-cyan-300 ">OPEN HOURS</h2>
              <a href="tel:+8801714457298" className="text-white underline">
                Mon-Thu:8am-7pm
              </a>
            </li>
          </ul>
        </section>
        <Services />
        <section className="mx-1 w-4xl flex justify-start flex-between bg-[#96f7fe] py-6 my-10">
          <h3 className="text-sm sm:text-2xl mx-8 text-left">
            Easy Online Carwash Booking System
          </h3>
          <button className="mx-8 text-sm  ml-auto sm:py-2 sm:px-6 py-1 px-3 bg-[#051f42] text-white">
            BECOME A MEMBER
          </button>
        </section>
        <section id="about" className="scroll-m-10 max-w-4xl mx-auto items-center justify-start  text-white flex flex-col sm:flex-row mt-12 mb-8">
          <h2 className="text-left px-2 gap-8 sm:w-1/3 w-full text-2xl sm:text-3xl font-bold">
            Leading Car wash Center For You in U.S
          </h2>

          <p className="ml-auto px-2 mt-2 sm:w-1/2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            perspiciatis non sunt tempora provident.
            <span>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                perspiciatis non sunt tempora provident.
              </p>
            </span>
          </p>
        </section>
        <div className="max-w-4xl flex justify-evenly mx-auto flex-wrap sm:flex-row  gap-4 my-8">
          <img
            className="sm:w-1/5 w-1/3"
            src="./src/images/Blog01.jpg"
            alt="Car wash"
          />
          <img
            className="sm:w-1/5 w-1/3"
            src="./src/images/Blog02.jpg"
            alt="Automatic wash"
          />
          <img
            className="sm:w-1/5 w-1/3"
            src="./src/images/Blog03.jpg"
            alt="interior wash"
          />
          <img
            className="sm:w-1/5 w-1/3"
            src="./src/images/Blog04.jpg"
            alt="body wash"
          />
        </div>
        <section className="my-12 flex sm:flex-row flex-wrap justify-center items center mx-auto text-center  text-white">
          <div className="w-1/2 sm:w-1/3  border-solid border-r-[1px]">
            <h2 className="sm:text-4xl text-3xl font-bold">5M</h2>
            <p className="sm:text-sm mx-auto text-xs w-1/2 ">
              Over five million happy customers
            </p>
          </div>

          <div className="w-1/2 sm:w-1/3   border-solid sm:border-r-[1px]">
            <h2 className="sm:text-4xl text-3xl font-bold">#1</h2>
            <p className="sm:text-sm mx-auto text-xs w-1/2 ">
              We are The best car wash in america
            </p>
          </div>
          <div className="w-1/2 sm:w-1/3  ">
            <h2 className="sm:text-4xl text-3xl font-bold">450K</h2>
            <p className="sm:text-sm mx-auto text-xs w-1/2 ">
              Over 450,five-star reviews from satisfied customers
            </p>
          </div>
        </section>
        <section className=" my-8 py-12 px-3 bg-gradient-to-b from-[#03b5ff] to-[#2167fd09]">
          <div className="mb-2 flex flex-row justify-center items-center">
          <hr className="w-1/12 my-3 bg-slate-900 mt-3.5 mx-2" /><h4 className="sm:text-sm text-xs">OUR PROCESS</h4><hr className=" my-3 w-1/12 bg-slate-900 mt-3.5 mx-2" /></div>
          <h2 className="mb-8 font-bold text-3xl sm:text-4xl text-center">How it work</h2>
          <section className="flex flex-row justify-center items center mx-auto">
            <hr className="w-1/12  bg-[#40fda1] mt-3.5 mx-2" />
            <button className="bg-[#40fda1] p-2 w-12">01</button>
            <hr className="w-1/6  bg-[#40fda1] mt-3.5 mx-2" />
            <button className="bg-[#40fda1] p-2 w-12">02</button>
            <hr className="w-1/6  bg-[#40fda1] mt-3.5 mx-2" />
            <button className="bg-[#40fda1] p-2 w-12">03</button>
            <hr className="w-1/6 bg-[#40fda1] mt-3.5 mx-2" />
            <button className="bg-[#40fda1] p-2 w-12">04</button>
            <hr className="w-1/12 bg-[#40fda1] mt-3.5 mx-2" />
          </section>
          <section className="flex flex-row justify-center items-center  gap-4 text-center text-white">
            <div className="w-1/4">
              <h4 className="mx-auto">Pre wash area</h4>
              <p className="text-xs">Lorem ipsum dolor.</p>
            </div>
            <div className="w-1/4">
              <h4>Select your wash</h4>
              <p className="text-xs">Lorem ipsum dolor.</p>
            </div>
            <div className="w-1/4">
              <h4>Interior cleaning</h4>
              <p className="text-xs">Lorem ipsum dolor.</p>
            </div>
            <div className="w-1/4">
              <h4>Hand dry & finish</h4>
              <p className="text-xs">Lorem ipsum dolor.</p>
            </div>
          </section>
        </section>
        <Location/>
        <Testimonial/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
