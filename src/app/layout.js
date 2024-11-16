import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Achieve Your Beauty Goals with The Ästhetik Clinic",
  description:
    "Discover personalized aesthetic solutions at The Ästhetik. From Botox to laser treatments, we tailor plans to your unique beauty needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon for all browsers */}
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/the-asthetik.appspot.com/o/the-ashthetik%2Fshorticon.png?alt=media&token=b572e6aa-12f1-4435-bdc1-a2ab650c3b34"
          type="image/png"
          sizes="32x32"
        />
            <link
          rel="canonical"
          href="https://theasthetik.com/"
          key="canonical"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="FA1DrQTSlTQd3plMG4tacsZJvDRX3dTaLNydWnP4VRk" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
