import React from "react";
import Layout from "../components/Layout";
import Foto from "../assets/ronalis.jpg";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ListLanguage from "../components/ListLanguage";
import Heading from "../components/Heading";
import ListFramework from "../components/ListFramework";
import ListBackend from "../components/ListBackend";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-violet-500 to-teal-500 w-full min-h-screen lg:px-32 flex items-center flex-col">
        <div className="mt-20 flex flex-col items-center">
          <img
            src={Foto}
            alt="foto"
            className="lg:w-[280px] lg:h-[268px] rounded-full w-[200px] h-[195px]"
          />
          <div className="text-center space-y-2 mt-3">
            <p className="lg:text-3xl text-xl font-light text-white">
              Ronalis Saputra
            </p>
            <p className="text-white">Web App Developer</p>
            <p className="text-white">Fresh Graduate</p>
            <p className="text-white mt-4 font-semibold lg:text-lg flex">
              <RiDoubleQuotesL />
              Enthusiastic about coding and shaping impactful digital
              experiences
              <RiDoubleQuotesR />
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a href="https://github.com/ronalissaputra" target="_blank">
                <AiFillGithub className="text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ronalis-saputra-057994245/"
                target="_blank"
              >
                <AiFillLinkedin className="text-4xl" />
              </a>
              <a href="mailto:ronalissaputra@gmail.com" target="_blank">
                <AiOutlineMail className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-24 mx-3 lg:mt-10">
        <div className="lg:mt-5">
          <Heading>Programming Language</Heading>
          <div>
            <ListLanguage />
          </div>
        </div>
        <div className="mt-5">
          <Heading>Framework & Library</Heading>
          <div>
            <ListFramework />
          </div>
        </div>
        <div className="mt-5">
          <Heading>My Current Learning</Heading>
          <div>
            <ListBackend />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Homepage;
