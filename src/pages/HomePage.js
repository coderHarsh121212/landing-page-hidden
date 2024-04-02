import React from "react";
import AgreeBox from "../components/AgreeBox";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-6 justify-center">
      <div>
        <AgreeBox />
      </div>
      <div className="w-[90%] h-[fit] min-h-[92vh] bg-transparent text-white flex flex-col  pt-5 gap-1 pb-10 mx-auto md:w-[70%] items-center md:items-start md:pt-20">
        <div className="font-medium text-xl font-sans mx-2 ">
          Welcome to WeTransfer
        </div>
        <div className="text-3xl sm:text-4xl  md:text-4xl w-[90%] font-mons text-center md:text-left lg:text-7xl font-black">
          𝚃𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖 ideas.
          <p className="  font-mons">
            <h1 className="font-black stroke">𝚃𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖 𝚝𝚑𝚎 𝚠𝚘𝚛𝚕𝚍.</h1>
          </p>
        </div>
        <div className="text-md  w-full  sm:w-[90%] flex flex-col gap-2 font-medium font-sans mx-2 ">
          <p>
            By accepting our cookies, you directly help us to expand our pledge
            to the planet. This year alone, WeTransfer has committed to planting
            over 175,000 trees, and we’re just getting started. You’ll have a
            positive impact by simply experiencing our award-winning ads.
          </p>
          <p>
            Our website uses cookies to improve performance, service, and to
            better understand your needs. By accepting our third-party cookies,
            we and our partners are able to offer you more relevant advertising
            on and outside of our website(s) and apps. Learn more about our
            Privacy Policy.
          </p>
        </div>
        <div className="flex gap-7 mt-2 flex-col md:flex-row w-full items-center ">
          <p className="bg-blue-700 px-4 rounded-md text-white p-2 items-center gap-2 cursor-pointer hover:bg-blue-600 transition-all w-full text-center md:w-fit">
            Get Started
          </p>
          <p className="bg-transparent px-4 rounded-md text-white p-2 items-center gap-2 cursor-pointer hover:border-blue-600 hover:bg-blue-600 transition-all w-full text-center border-2 md:w-fit">
            Manage Cookies
          </p>
          <p className="bg-transparent px-4 rounded-md text-white  flex items-center gap-2  cursor-pointer underline hover:text-blue-900 ">
            No Thanks
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
