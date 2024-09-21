import React from "react";
import { TbWorldCode } from "react-icons/tb";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Icon from "./assets/icon";
function App() {
  return (
    <>
      <section className="h-screen w-screen bg-gradient-to-r from-bg_primary to-bg_secondary font-sans">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-bg_card w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] lg:h-[40%] 2xl:w-[40%] rounded-2xl flex justify-center items-center">
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center transform -translate-y-1/2 lg:-translate-y-0 lg:-translate-x-1/4">
                <img
                  src="profile.jpg"
                  className="rounded-full lg:rounded-xl w-48 h-48 lg:w-52 lg:h-72 object-cover"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-[70%] flex justify-center items-center">
                <div className="flex flex-col mx-10 mb-10 -mt-20 lg:mb-0 lg:mx-0 lg:-mt-0 lg:mr-10">
                  <h1 className="text-text_primary text-3xl mt-4 flex font-semibold justify-center lg:justify-start">
                    Angel Ramirez
                  </h1>
                  <h2 className="text-text_secondary text-lg flex justify-center lg:justify-start">
                    Software engineering
                  </h2>
                  <p className="text-text_tertiary text-sm sm:text-base mt-2 font-semibold flex justify-center lg:justify-start text-center lg:text-start">
                    With over 3 years of experience in software development, I
                    am passionate about programming and problem-solving. I
                    specialize in web development, mobile applications, and
                    desktop software. I am always seeking new challenges and
                    opportunities for improvement.
                  </p>
                  <div className="mt-4">
                    <div className="w-full flex space-x-6 justify-center lg:justify-start">
                      <a
                        className="border-text_primary border rounded-xl text-text_primary px-8 py-2 hover:bg-text_primary hover:text-bg_card transition-all duration-300 ease-in-out"
                        href="https://jarsdev.netlify.app/blog"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>Profile</button>
                      </a>
                      <a
                        className="border-text_primary border rounded-xl bg-text_primary text-bg_card px-8 py-2 hover:bg-bg_card hover:text-text_primary transition-all duration-300 ease-in-out"
                        href="https://jarsdev.netlify.app/blog"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>Follow</button>
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-center lg:justify-end">
                      <ul className="text-text_secondary flex space-x-4">
                        <Icon link={"https://jarsdev.netlify.app/"}>
                          <TbWorldCode />
                        </Icon>
                        <Icon link={"https://github.com/ImJars"}>
                          <FaGithub />
                        </Icon>
                        <Icon link={"https://www.linkedin.com/in/imjars/"}>
                          <FaLinkedin />
                        </Icon>
                        <Icon link={"https://x.com/Im_Jars"}>
                          <BsTwitterX />
                        </Icon>
                        <Icon link={"https://www.instagram.com/jars.little/"}>
                          <FaInstagram />
                        </Icon>
                        <Icon
                          link={
                            "https://www.facebook.com/joseangel.ramirezsanchez.92/?locale=es_LA"
                          }
                        >
                          <FaFacebookSquare />
                        </Icon>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
