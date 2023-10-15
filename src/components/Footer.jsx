import React from "react";
import SocialMedia from "./utils/SocialMedia";

const Footer = () => {
  const copyRight = "Copyright © 2023 Aavarana - All Rights Reserved.";
  return (
    <footer className="fixed flex flex-col gap-2 py-2 h-auto bottom-0 w-full bg-blue-950">
      <SocialMedia />
      <h2 className="flex justify-center text-xs font-poppins text-gray-200">
        {copyRight}
      </h2>
    </footer>
  );
};

export default Footer;
