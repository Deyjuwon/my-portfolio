import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Montserrat } from 'next/font/google';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});


export const metadata: Metadata = {
  title: "Adejuwon - Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
