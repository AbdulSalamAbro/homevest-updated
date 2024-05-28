// import React from "react";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";
// import { ClientData } from "@/data/data";
// import clientBorder from "../public/images/clients/client-border.svg";
// import clientBorderDark from "../public/images/clients/client-border-dark.svg";
// import Link from "next/link";

// const Clients = ({
//   sectionTitle = true,
//   border = true,
//   spacing = "pt-[80px] pb-[80px] max-lg:py-20 bg-white dark:bg-dark-300 ",
// }) => {
//   return (
//     <section className={`client ${spacing} `}>
//       <div className="container overflow-hidden max-lg:!px-0">
//         {sectionTitle && (
//           <div className=" px-10px mx-auto max-w-[550px] text-center max-lg:px-2.5">
//             {/* <h2 className="mb-10">The world&rsquo;s best companies trust aplio.</h2> */}
//             <h2 className="mb-10 text-[25px] md:text-[32px] lg:text-[36px]">
//               Featured in
//             </h2>
//           </div>
//         )}

//         <div className="relative py-8 before:absolute before:-right-0.5 before:top-1/2 before:z-10 before:h-[40px] before:w-[120px] before:-translate-y-1/2  before:bg-gradient-to-l before:from-white before:from-[37.5%] after:absolute after:-left-0.5 after:top-1/2 after:z-10 after:h-[40px] after:w-[120px] after:-translate-y-1/2  after:bg-gradient-to-r after:from-white  after:from-[37.5%] dark:before:from-dark-gradient dark:after:from-dark-gradient">
//           {border && (
//             <div className="absolute left-0 top-0 h-full w-full  max-lg:hidden">
//               <Image
//                 src={clientBorder}
//                 alt="border"
//                 className="inline-block dark:hidden"
//               />
//               <Image
//                 src={clientBorderDark}
//                 alt="border"
//                 className="hidden dark:inline-block"
//               />
//             </div>
//           )}

//           <Marquee pauseOnHover>
//             {ClientData.map((clients) => (
//               <div
//                 className="h-30 marquee-content-list relative w-[215px]"
//                 key={clients.id}
//               >
//                 <div className="relative h-[50px] w-[200px] pb-[40px] ml-[40px]"> 
//                   <Image
//                     src={clients.imageLight}
//                     alt="group"
//                     className="dark:hidden"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                   <Image
//                     src={clients.imageDark}
//                     alt="group"
//                     className="hidden dark:inline-block"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </Marquee>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { ClientData } from "@/data/data";
import clientBorder from "../public/images/clients/client-border.svg";
import clientBorderDark from "../public/images/clients/client-border-dark.svg";
import Link from "next/link";

const Clients = ({
  sectionTitle = true,
  border = true,
  spacing = "pt-[80px] pb-[80px] max-lg:py-20 bg-white dark:bg-dark-300 ",
}) => {
  return (
    <section className={`client ${spacing} `}>
      <div className="container overflow-hidden max-lg:!px-0">
        {sectionTitle && (
          <div className="px-10px mx-auto max-w-[550px] text-center max-lg:px-2.5">
            <h2 className="mb-10 text-[25px] md:text-[32px] lg:text-[36px]">
              Featured in
            </h2>
          </div>
        )}

        <div className="relative py-8 before:absolute before:-right-0.5 before:top-1/2 before:z-10 before:h-[40px] before:w-[120px] before:-translate-y-1/2 before:bg-gradient-to-l before:from-white before:from-[37.5%] after:absolute after:-left-0.5 after:top-1/2 after:z-10 after:h-[40px] after:w-[120px] after:-translate-y-1/2 after:bg-gradient-to-r after:from-white after:from-[37.5%] dark:before:from-dark-gradient dark:after:from-dark-gradient">
          {border && (
            <div className="absolute left-0 top-0 h-full w-full max-lg:hidden">
              <Image
                src={clientBorder}
                alt="border"
                className="inline-block dark:hidden"
                layout="fill"
                objectFit="cover"
              />
              <Image
                src={clientBorderDark}
                alt="border"
                className="hidden dark:inline-block"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}

          <Marquee pauseOnHover>
            {ClientData.map((clients) => (
              <div
                className="h-30 marquee-content-list relative w-[215px]"
                key={clients.id}
              >
                <div className="relative h-[60px] w-[60px] pb-[30px]">
                  <Image
                    src={clients.imageLight}
                    alt="group"
                    className="dark:hidden"
                    width={60}
                    height={60}
                    objectFit="cover"
                  />
                  <Image
                    src={clients.imageDark}
                    alt="group"
                    className="hidden dark:inline-block"
                    width={60}
                    height={60}
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Clients;