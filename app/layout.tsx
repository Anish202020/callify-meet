import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'
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
  icons:{
    icon: "/data/callify.png"
  }
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
            unsafe_disableDevelopmentModeWarnings: true,
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
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
