"use client";
import {
  fadeFromLeftAnimation,
  fadeFromRightAnimation,
  fadeUpAnimation,
} from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import visionImage2Light from "@/public/images/vision/vision-image-1.png";
import visionImage3Light from "@/public/images/vision/vision-image-2.png";
import visionImage2Dark from "@/public/images/vision/vision-image-dark-1.png";
import visionImage3Dark from "@/public/images/vision/vision-image-dark-2.png";
import {
  default as visionImageOneDark,
  default as visionImageOneLight,
} from "@/public/images/vision/vision-image.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Vision = () => {
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);

  // const controlAnimation1 = useWhileInView(ref1);
  // const controlAnimation2 = useWhileInView(ref2);
  // const controlAnimation3 = useWhileInView(ref3);

  return (
    <section className="relative overflow-hidden bg-[#F7FCFF] pb-[50px] pt-[50px] dark:-mt-24 dark:bg-dark max-md:pb-20 dark:max-md:-mt-60">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="p-5 lg:p-10">
            <p className="section-tagline">REAL ESTATE INVESTING MADE EASY</p>

            <h2 className="mb-8 max-lg:mb-4 text-[26px] md:text-[36px] lg:text-[54px]">
              What is Homevest?
            </h2>
            <p className="mb-11 max-lg:mb-5">
            Homevest is a digital investment platform that helps users purchase SEC-qualified shares in individual rental homes. Our goal is to empower real estate investing and wealth building with simple and accessible tools. 

For as little as $100, you can invest in fractional real estate property and earn rental income with Homevest.

            </p>
            {/* <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  Guided Payment Procurement
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  Guided Payment Procurement
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>

                <span className="font-jakarta_sans font-medium dark:text-white">
                  Guided Payment Procurement
                </span>
              </li>
            </ul> */}
            <Link
              href="/contact"
              className="btn"
            >
              Get Started
            </Link>
          </div>
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full h-full z-10 p-[50px]"
            >
              <Image
                src="/images/Frame 2121455565.png"
                alt="vision image"
                width={600}
                height={700}
                className="w-full"
              />
            </motion.div>
            {/* <motion.div
              variants={fadeUpAnimation}
              initial="initial"
              ref={ref2}
              animate={controlAnimation2}
            >
              <Image
                src={visionImageOneDark}
                alt="vision image"
                className="hidden w-[260px] dark:inline-block xl:w-[310px]"
              />
            </motion.div>

            <motion.div
              className="absolute -top-25 left-40 w-[200px] md:-top-12  md:w-[200px] xl:-top-[150px]  xl:left-[290px] xl:w-[310px]"
              initial="initial"
              ref={ref3}
              animate={controlAnimation3}
              variants={fadeFromLeftAnimation}
            >
              <Image
                src={visionImage2Light}
                alt="vision image shape"
                className="h-full w-full object-contain dark:hidden"
              />
              <Image
                src={visionImage2Dark}
                alt="vision image shape"
                className="hidden h-full w-full dark:inline-block"
              />
            </motion.div>

            <motion.div
              variants={fadeUpAnimation}
              initial="initial"
              ref={ref2}
              animate={controlAnimation2}
              className="absolute bottom-5 left-20 w-[280px] md:bottom-0 md:left-[100px] md:w-[200px] xl:bottom-8 xl:left-150 xl:w-[350px]"
            >
              <Image
                src={visionImage3Light}
                alt="vision image shape"
                className="h-full w-full dark:hidden"
              />
              <Image
                src={visionImage3Dark}
                alt="vision image shape"
                className="left-0 top-0 hidden h-full w-full dark:inline-block"
              />
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
