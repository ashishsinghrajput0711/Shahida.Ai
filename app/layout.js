import "./globals.css";
import Footer from "@/components/Footer";
import LandingSections from "@/components/LandingSections";
import Wrapper from "@/components/Wrapper"; // Client component

export const metadata = {
  title: "Botika Clone",
  description: "AI Fashion Store Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* Wrapper is a client component */}
        <Wrapper>
          {children}
          <LandingSections />
        </Wrapper>
        <Footer />
      </body>
    </html>
  );
}
