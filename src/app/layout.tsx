import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import LenisScroll from "@/lib/Scroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Anubit Technologies (OPC) Private Limited",
    default:
      "Anubit Technologies (OPC) Private Limited | Web Developer | Web hosting",
  },
  description: "Build By Titas Ghosh | A Creative Front-end Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LenisScroll> */}
          <Header />
          {children}
          <Footer />
        {/* </LenisScroll> */}
      </body>
    </html>
  );
}
