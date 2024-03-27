import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freight Planner",
  description: "Step into the future of logistics with Freight Planner, a cutting-edge solution designed to revolutionize container optimization. Trusted by intergalactic forwarders, manufacturers, and spacefaring airlines, our platform harnesses the power of advanced AI algorithms to create hyper-efficient load plans that save you time, money, and fuel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
