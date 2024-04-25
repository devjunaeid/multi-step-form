import React from "react";

function ThankYou() {
  return (
    <p className="px-5 py-20 flex flex-col justify-center items-center w-full text-lg text-gray-400 text-center md:py-0">
     <img src="./src/assets/images/icon-thank-you.svg" alt="Register Complete" className="w-14 h-14 mb-4"/>
      <span className="text-3xl font-ubuntu_bold text-black mb-4">Thank You!</span>
      Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@zengamming.com.
    </p>
  );
}

export default ThankYou;
