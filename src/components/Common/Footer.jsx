// import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="w-11/12 max-w-maxContent mx-auto py-5 text-richblack-400">

        <div className="flex flex-col md:flex-row gap-2 justify-between items-center text-sm">
          <div className="flex gap-4 text-lg">
              <Link to="https://www.linkedin.com/in/aritra-ray-bb2b03223/">
                <FaLinkedin />
              </Link>
              <Link to="https://github.com/AritraRock/StudyNotion">
                <FaGithub />
              </Link>
              <Link to="https://www.instagram.com/aritra_rayy/">
                <FaInstagram />
              </Link>
            </div>
            <div>
              <p className="text-center">
                Made by Aritra Ray © 2024 StudyNotion
              </p>
            </div>
          <div className="flex gap-4 md:mt-0">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
