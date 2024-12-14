import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Itim } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itim = Itim({ subsets: ["latin"], weight: ["400"] });
export const metadata: Metadata = {
  title: "Ease School",
  description: "Quản lý trường học",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={itim.className}>
          {children} <ToastContainer position="bottom-right" theme="dark" />
        </body>
      </html>
    </ClerkProvider>
  );
}
