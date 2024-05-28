"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { fadeUpAnimation } from "@/data/animation";
import { motion } from "framer-motion";

const PaymentHero = () => {
  return (
    <section className="hero relative overflow-hidden pb-[30px] max-lg:pt-[80px] lg:pt-[130px] bg-gradient-to-b from-[#f5fafc] to-white dark:from-[#171717] dark:to-black">
      <div className="container relative h-[450px] md:h-[400px] lg:h-[450px] ">
        {/* <video
          autoPlay
          // loop
          muted
          playsInline
          className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className="relative z-10">
          <motion.div
            className="max-md:col-span-full mb-50px max-md:mb-[350px] md:col-span-7 flex flex-col gap-2 text-center justify-center items-center lg:hidden text-black dark:text-white"
            initial="initial"
            animate="animate"
            variants={fadeUpAnimation}
          >
            {/* <p className=" mb-4 font-medium uppercase ">
              Earn Passive Income Today
            </p> */}
            <h1 className="mb-5 text-[36px] md:text-[66px] lg:text-[86px]">
              Real Estate
              <span className="inline-block px-5 pb-2.5 pt-0.5  font-playfair italic leading-none">
                {" "}
                Investing{" "}
              </span>
              Made Easy
            </h1>
            <p className="mb-5 max-w-[590px]">
              Invest in single-family homes and vacation rentals with a click of
              a button. Enjoy all of the benefits and none of the hassle of real
              estate investment
            </p>
            <div className="flex items-center gap-1 md:gap-4 flex-wrap justify-center">
              <div className="px-[15px] py-[13px] bg-white dark:bg-[#121212] border border-gray-400 rounded-full flex items-center gap-2 justify-center">
                <MdOutlineMail className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="border-0 outline-none ring-0"
                />
              </div>
              <button className="btn">Join Our Newsletter</button>
              <button className="flex items-center justify-center gap-2 border border-gray-400 px-[10px] py-[13px] rounded-xl">
                <FcGoogle /> Sign in with Google
              </button>
            </div>
          </motion.div>
          <motion.div
            className="max-w-[900px] w-full mx-auto mb-50px hidden lg:flex flex-col gap-2 text-center justify-center items-center text-black dark:text-white"
            initial="initial"
            animate="animate"
            variants={fadeUpAnimation}
            style={{ padding: "25px" }}
          >
            {/* <p
              className=" mb-4 font-medium uppercase "
              style={{ color: "black" }}
            >
              Earn Passive Income Today
            </p> */}
            <h1 className="mb-5 text-[86px] font-[500]">
              Real Estate
              <span className="inline-block px-5 pb-2.5 pt-0.5  font-playfair italic leading-none">
                {" "}
                Investing{" "}
              </span>
              Made Easy
            </h1>
            <p className="mb-5 max-w-[590px]">
              Invest in single-family homes and vacation rentals with a click of
              a button. Enjoy all of the benefits and none of the hassle of real
              estate investment
            </p>
            <div className="flex items-center gap-4">
              <div className="px-[15px] py-[13px] bg-white dark:bg-[#121212] border border-gray-400 rounded-full flex items-center gap-2 justify-center">
                <MdOutlineMail className="text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border-0 outline-none ring-0"
                />
              </div>
              <button className="btn">Join Our Newsletter</button>
              <button className="flex items-center justify-center gap-2 border border-gray-400 px-[10px] py-[13px] rounded-xl">
                <FcGoogle /> Sign in with Google
              </button>
            </div>
          </motion.div>
          {/* <motion.div
            className="relative max-md:col-span-full md:z-10 md:col-span-5"
            initial="initial"
            animate="animate"
            variants={fadeUpAnimation}
          >
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
              <div className="rounded-full bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-lg:hidden 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] -mt-150 rounded-full  bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:blur-[80px] max-lg:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-lg:hidden 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <div className="absolute -bottom-150 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
            <div className="h-full w-full">
              <div className="relative">
                <Image
                  src={PaymentImage}
                  alt="hero Image"
                  className="inline-block w-full rounded-medium shadow-nav dark:hidden"
                />
                <Image
                  src={PaymentImageDark}
                  alt="hero Image"
                  className="hidden w-full rounded-medium shadow-nav dark:inline-block"
                />
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 max-lg:w-4/5 max-md:w-[285px] lg:aspect-video lg:w-[285px]">
                  <Image
                    src={PaymentImageDevice}
                    alt="hero Image"
                    className="inline-block w-full rounded-t-medium  dark:hidden"
                  />
                  <Image
                    src={PaymentImageDeviceDark}
                    alt="hero Image"
                    className="hidden w-full rounded-t-medium dark:inline-block "
                  />
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default PaymentHero;
