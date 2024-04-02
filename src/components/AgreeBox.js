import React from "react";

const AgreeBox = () => {
  return (
    <div className="min-w-64 rounded-xl flex flex-col gap-3 bg-white p-5   opacity-50 w-[70%] mx-auto  h-fit ">
      <p className="bg-black text-white p-3 rounded-full w-fit">We</p>
      <p className="text-3xl">
        You're <span className="font-extrabold">almost</span> there
      </p>
      <p className="border-b-2 py-4 text-lf font-sans">
        To continue, please agree to our{" "}
        <span className="underline">Terms of Service, </span> and acknowledge
        our <span className="underline">Privacy Policy</span>
      </p>
      <button className="px-5 py-2 text-white rounded-full text-center bg-blue-500 mt-5">
        I agree
      </button>
    </div>
  );
};

export default AgreeBox;
