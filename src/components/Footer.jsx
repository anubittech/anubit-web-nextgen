import React from "react";
import { route } from "@/data/navigation";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="redd relative flex min-h-96 w-full flex-col items-center justify-center bg-blue-950 p-2">
      <div className="flex h-full w-full flex-wrap flex-col items-center justify-around laptop:flex-row">
        <div className="redd relative flex  size-96 flex-col items-center justify-start pt-10 text-white">
          <div className="w-full">
            <h1 className="text-2xl font-bold italic">ANUBIT</h1>
          </div>
          {/* <div className="blue-ball"></div> */}
          <div className="w-full text-left text-base">
            <p className="font-light">
              <span className="w-full font-semibold">
                Anubit Technologies (OPC) Private Limited
              </span>
              <br />
              excels in providing exceptional web services. With our expertise
              in hosting, server management, and web design solutions, we ensure
              reliable performance and seamless online experiences. Experience
              our industry-leading services for yourself and witness the
              difference.
            </p>
          </div>
        </div>
        <div className="redd flex size-96 flex-col items-center justify-start gap-5 pt-10 text-white">
          <div className="w-full border-b-2">
            <h1>LEGAL</h1>
          </div>
          <div className="w-full">
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "Refund Policy",
              "Checkout User Flow",
            ].map((item,i) => {
              return <h1 key={i} className="">{item}</h1>;
            })}
            <div className="w-full border-b-2 pt-5">
              <h1>CREDITS</h1>
              <div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="redd flex size-96 flex-col items-center justify-start gap-5 pt-10 text-white">
          <div className="w-full border-b-2">
            <h1>NAVIGATION</h1>
          </div>
          <div className="w-full">
            {route.map((data) => {
              return (
                <h1 key={data.id}>
                  <Link href={data.route}>{data.lable}</Link>
                </h1>
              );
            })}
          </div>
          <div className="w-full border-b-2">
            <h1>SOCIAL LINK</h1>
          </div>
          <div className="flex w-full gap-5">
            {["Facebook", "Instagram", "Twitter"].map((data, i) => {
              return <h1 key={i}>{data}</h1>;
            })}
          </div>
        </div>
        <div className="redd flex size-96 flex-col items-center justify-start gap-5 pt-10 text-white">
          <div className="w-full border-b-2">
            <h1>CONTACT US</h1>
          </div>
          <div className="flex w-full flex-col gap-5">
            {[
              { title: "Support", email: "support@anubit.in" },
              { title: "Business Query", email: "business@anubit.in" },
              { title: "Complaint", email: "complaint@anubit.in" },
            ].map((data, idx) => {
              return (
                <div
                  key={idx}
                  className="redd flex w-full flex-col items-start justify-center"
                >
                  <h1>{data.title}</h1>
                  <h1 className="font-light underline">{data.email}</h1>
                </div>
              );
            })}
            <h1 className="font-light">Call: 03473-467-745</h1>
          </div>
        </div>
      </div>
      {/* 03473-467-745 */}

      {/* <div className="redd flex h-12 w-full items-center justify-center bg-blue-900 text-center text-white">
        <h1>
          Designed & Developed by Anubit Technologies (OPC) Private Limited
        </h1>
      </div> */}
    </div>
  );
};

export default Footer;
