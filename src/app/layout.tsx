import type { Metadata } from "next";
import { Noto_Sans_Gujarati, Noto_Serif_Gujarati } from "next/font/google";
import "./globals.css";

const bodyFont = Noto_Sans_Gujarati({
  variable: "--font-body",
  subsets: ["gujarati"],
  weight: ["300", "400", "500", "600", "700"],
});

const displayFont = Noto_Serif_Gujarati({
  variable: "--font-display",
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "શ્રી કેશવ એનિમલ હોસ્પિટલ અને ગૌ સેવા મંદિર | ગૌશાળા",
  description:
    "શ્રી પ્રસ્થાન ચેરિટેબલ ટ્રસ્ટ દ્વારા સંચાલિત ગૌસેવા, એનિમલ હોસ્પિટલ અને ગ્રામ્ય વિસ્તાર માટે દાન અભિયાન.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
