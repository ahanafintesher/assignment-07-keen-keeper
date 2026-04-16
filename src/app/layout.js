import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { FriendsProvider } from "@/context/FriendsContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Get Your Friends Close",

  openGraph: {
    title: "KeenKeeper",
    description: "Get Your Friends Close",
    url: "https://keen-keeper-xi-plum.vercel.app/",
    siteName: "KeenKeeper",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <FriendsProvider>
          <Navbar></Navbar>
        {children}
        <ToastContainer autoClose={3000} position="top-center"></ToastContainer>
        <Footer></Footer>
        </FriendsProvider>
        </body>
    </html>
  );
}
