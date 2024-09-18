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
          <div className="bg-bg_card w-[40%] h-[40%] rounded-2xl flex justify-center items-center">
            <div className="flex justify-between">
              <div className="flex transform -translate-x-10">
                <img
                  src="profile.jpg"
                  className="rounded-xl w-52 h-72 object-cover"
                  alt=""
                />
              </div>
              <div className="w-[65%] flex justify-center items-center">
                <div className="mr-10">
                  <h1 className="text-text_primary text-3xl mt-4">
                    Angel Ramirez
                  </h1>
                  <h2 className="text-text_secondary text-lg">
                    Software engineering
                  </h2>
                  <p className="text-text_tertiary text-base mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis quod quae, voluptate, quos, quas quia quibusdam
                    voluptatibus sit et dolores iusto. Eaque, quod. Quisquam,
                    quidem.
                  </p>
                  <div className="mt-4">
                    <div className="w-full flex space-x-6">
                      <button className="border-text_primary border rounded-xl text-text_primary px-8 py-2">
                        Profile
                      </button>
                      <button className="border-text_primary border rounded-xl bg-text_primary text-bg_card px-8 py-2">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-end">
                      <ul className="text-text_secondary flex space-x-4">
                        <Icon>
                          <TbWorldCode />
                        </Icon>
                        <Icon>
                          <FaGithub />
                        </Icon>
                        <Icon>
                          <FaLinkedin />
                        </Icon>
                        <Icon>
                          <BsTwitterX />
                        </Icon>
                        <Icon>
                          <FaInstagram />
                        </Icon>
                        <Icon>
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
