import React, { useState } from "react";
import { CaretDown, CloseLogo, Hamburger } from "../icons/icon";

const Navbar = () => {
  const [shownav, setShowNav] = useState(false);
  const [showfeatures, setShowfeatures] = useState(false);
  return (
    <div className="">
      <div className="md-navbar">
        <div className="m-4 lg:ml-23 text-2xl font-black">WE</div>
        <div className="m-4 lg:mr-5">
          <div className="flex lg:text-xl font-sans text-lg items-center bg-white rounded-md border-2">
            <a href="#" className="navlinks ">
              Pricing
            </a>
            <div className="relative">
            <a href="#" className="navlinks " onClick={()=>setShowfeatures(!showfeatures)}>
              Features
              <CaretDown />
            </a>
            {showfeatures && (
                <div className="absolute top-14 bg-white text-black text-base px-5 py-3  flex flex-col w-60 rounded-md">
                  <a className="py-1">All Features </a>
                  <a className="py-1">For File Sharing</a>
                  <a className="py-1">For Collaboration</a>
                  <a className="py-1">For Data Security</a>
                  <a className="py-1">For Branding</a>
                  <a className="py-1">For Fast Feedback</a>
                </div>
              )}
              </div>
            <a href="#" className="navlinks">
              Company
            </a>
            <a href="#" className="navlinks">
              Help
            </a>
            <a href="#" className="navlinks     ">
              Sign up
            </a>
            <a href="#" className="navlinks border-r-0">
              Log in
            </a>
          </div>
        </div>
      </div>
      {/* //inital */}
      <div className="init-navbar">
        <div className="  text-2xl font-bold text-white">WE</div>
        <div className="flex justify-between  items-center">
          <div onClick={() => setShowNav(!shownav)}>
            {shownav ? <p>{<CloseLogo />}</p> : <p>{<Hamburger />}</p>}
          </div>
        </div>
        {shownav && (
          <div className="fixed top-16 left-0 bg-white text-black w-full  shadow-2xl transition-all">
            <div className="flex flex-col gap-2 bg-white rounded-md">
              <a href="#" className="navlinks px-2 py-1 border-b-2 text-lg">
                Pricing
              </a>
              <div className="relative">
              <a href="#" className="navlinks px-2 py-1 border-b-2 relative text-lg" onClick={()=>setShowfeatures(!showfeatures)}>
                {" "}
                Features
                <CaretDown />
              </a>
              {showfeatures && (
                <div className="absolute top-10 bg-white text-black text-base flex flex-col w-fit rounded-md z-10 px-2 h-52">
                  <a className="py-1 border-b-2">All Features </a>
                  <a className="py-1 border-b-2">For File Sharing</a>
                  <a className="py-1 border-b-2">For Collaboration</a>
                  <a className="py-1 border-b-2">For Data Security</a>
                  <a className="py-1 border-b-2">For Branding</a>
                  <a className="py-1 border-b-2">For Fast Feedback</a>
                </div>
              )}
              </div>
              <a href="#" className="navlinks px-2 py-1 border-b-2 text-lg">
                Company
              </a>
              <a href="#" className="navlinks px-2 py-1 border-b-2 text-lg">
                Help
              </a>
              <a href="#" className="navlinks px-2 py-1 border-b-2 text-lg">
                Sign up
              </a>
              <a href="#" className="navlinks px-2 py-1 border-b-2 text-lg">
                Log in
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
