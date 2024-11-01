import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Callify",
  description: "Callify - Video Conferencing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/callify_logo.svg",
        },
        // variables: {
        //   colorText: "#000",
        //   colorPrimary: "#000",
        //   colorBackground: "#000",
        //   colorInputBackground: "#fff",
        //   colorInputText: "000",
        // },
      }}
      >
      
      <body
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}
        >
        {children}
        <Toaster/>
      </body>
        </ClerkProvider>
    </html>
  );
}
