import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SidePathUK — Your always-on estate agency assistant",
  description:
    "Capture every enquiry, book more viewings, and give your team time back with a helpful AI assistant built for UK estate agencies."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
