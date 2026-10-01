import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "My portfolio website",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}