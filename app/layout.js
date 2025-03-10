import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./progressBarprovider";
//import { AuthContextProvider } from "./context/AuthContext";
//import dynamic from "next/dynamic";
//const Footer = dynamic(() => import('@/components/footer/Footer'), { ssr: false });
//const Footer = dynamic(() => import('@/components/footer/Footer'));
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <AuthContextProvider> */}
      <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
      {/* </AuthContextProvider> */}
      </body>
    </html>
  );
}
