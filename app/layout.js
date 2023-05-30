import Nav from "@/components/Nav";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Water Quality Measurement",
  description: "Embedded Final Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
