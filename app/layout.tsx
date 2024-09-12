import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const dosisExtra = localFont({
  src: "./fonts/Dosis-ExtraBold.ttf",
  variable: "--font-dosis-extra",

});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Hack East Africa",
  description: "HackEA is the first ever hackathon for High schoolers in East Africa, created by high schoolers with the goal of empowering our local communities using tech. Our vision is to see us as high schoolers contributing to a greater cause of introducing and empowering more students to pursue working with technology in Africa as a whole.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dosisExtra.variable} antialiased p-4 m-4 flex flex-col`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
