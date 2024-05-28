import Image from "next/image";
import React from "react";
import { FooterData } from "@/data/data.js";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 dark:bg-dark-300">
      <div className="container">
        <div className="mb-20 grid grid-cols-12 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src={FooterData.logo}
              alt="logo"
              className="mb-10 w-52 inline-block dark:hidden"
              width={100}
              height={40}
            />
            <Image
              src={FooterData.logoDark}
              alt="logo dark version"
              className="mb-10 w-52 hidden dark:inline-block"
              width={100}
              height={40}
            />
            {/* <p className="max-w-[350px] max-lg:mx-auto">{FooterData.footerText}</p> */}
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.expolre.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Resources</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.resources.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Get In touch</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <Link
                href={`mailto:${FooterData.email}`}
                className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
              >
                {FooterData.email}
              </Link>
            </p>

            <p className="mb-3">
              <Link
                href={`tel:${FooterData.phone.split(" ").join("")}`}
                className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
              >
                {FooterData.phone}
              </Link>
            </p>
            <ul className="social-link flex items-center gap-4 max-lg:justify-center">
              {FooterData.socialLinks.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="transiton-all"
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="seperator">
          <Image
            src="/images/footer-seperator.svg"
            alt="footer-seperator"
            className="w-full object-cover dark:hidden"
            width={500}
            height={2}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/images/footer-seperator-dark.svg"
            alt="footer-seperator"
            className="hidden w-full object-cover dark:block"
            width={500}
            height={2}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="py-10 max-lg:text-center">
          <div className="flex flex-col gap-5">
            <p className="max-lg:mb-10 font-semibold">Desclaimer</p>
            <p>
              Homevest.io Holdings, Inc. ("Homevest.io"), as a manager of
              Homevest.io Homes, LLC, Homevest.io STR, LLC, Homevest.io Homes 3,
              LLC, Homevest.io STR 2, LLC, and Homevest.io SFR Genesis Fund,
              LLC, Homevest.io Debt Fund, LLC (together the “Homevest.io
              Issuers”), operates the homevest.io website (the "Site") and is
              not a broker-dealer or investment advisor. All securities related
              activity is conducted through Dalmore Group LLC, a registered
              broker-dealer and member of FINRA/SIPC, located at 525 Green
              Place, Woodmere, NY 11598. You can review the brokercheck for
              Dalmore. An up-to-date Dalmore Form CRS is available. You should
              speak with your financial advisor, accountant, and/or attorney
              when evaluating any offering. Neither Homevest.io, any of the
              Homevest.io Issuers, nor Dalmore makes any recommendations or
              provides advice about investments, and no communication, through
              this website or in any other medium, should be construed as a
              recommendation for any security offered on or off this investment
              platform. The Site may make forward-looking statements. You should
              not rely on these statements but should carefully evaluate the
              offering materials in assessing any investment opportunity,
              including the complete set of risk factors that are provided as
              part of the offering circular for your consideration. The
              Homevest.io Issuers are conducting public offerings pursuant to
              Regulation A, as amended, through the Site. The offering circulars
              and periodic reports for each of the Homevest.io Issuers are
              available on our Filings Page. Past performance is no guarantee of
              future results. Investments such as those on the Homevest.io
              platform are speculative and involve substantial risks to consider
              before investing, outlined in the respective offering materials
              and including, but not limited to, illiquidity, lack of
              diversification, and complete loss of capital. Key risks include,
              but are not limited to, limited operating history, limited
              diversification, risk of asset damage or theft, and lack of voting
              rights. Also, the adverse economic effects of the COVID-19
              pandemic remain unknown and could materially impact this
              investment. An investment in an offering constitutes only an
              investment in a particular series and not in any of the
              Homevest.io Issuers or the underlying asset(s). Investors should
              carefully review the risks located in the respective offering
              materials for a more comprehensive discussion of risk. From time
              to time, any of the Homevest.io Issuers will seek to qualify
              additional series offerings of securities under Regulation A. For
              offerings that have not yet been qualified, no money or other
              consideration is being solicited and, if sent in response, will
              not be accepted. No offer to buy securities of a particular
              offering can be accepted, and no part of the purchase price can be
              received, until an offering statement filed with the Securities
              and Exchange Commission (the "SEC") relating to that series has
              been qualified by the SEC. Any such offer may be withdrawn or
              revoked, without obligation or commitment of any kind, at any time
              before notice of acceptance given after the date of qualification
              by the SEC. An indication of interest involves no obligation or
              commitment of any kind. Investment overviews contained herein
              contain summaries of the purpose and the principal business terms
              of the investment opportunities. Such summaries are intended for
              informational purposes only and do not purport to be complete, and
              each is qualified in its entirety by reference to the
              more-detailed discussions contained in the respective offering
              circular filed with the SEC. None of the Homevest.io Issuers offer
              refunds after an investment has been made. Please review the
              relevant offering materials and subscription documentation for
              more information. An active trading market for any series of any
              of the Homevest.io Issuers' membership interests may not develop
              or be sustained. If an active public trading market for such
              series interests does not develop or is not sustained, it may be
              difficult or impossible for you to resell your interests at any
              price. Even if an active market does develop, the market price
              could decline below the amount you paid for your interests. There
              is no assurance that the Homevest.io platform will provide an
              active market for resales of such series interests. Further,
              without the Homevest.io platform, it may be difficult or
              impossible for you to dispose of your interests. If the market
              develops for any series of interests offered on the Homevest.io
              Platform, the market price of such interests could fluctuate
              significantly for many reasons, including reasons unrelated to
              performance, the underlying assets, or any series, such as reports
              by industry analysts, investor perceptions, or announcements by
              competitors regarding their performance, as well as general
              economic and industry conditions. For additional risk factors and
              disclaimer information, you can review our communications
              disclaimer.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
