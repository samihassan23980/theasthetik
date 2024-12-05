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
        <link rel="canonical" href="https://theasthetik.com/" key="canonical" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="FA1DrQTSlTQd3plMG4tacsZJvDRX3dTaLNydWnP4VRk"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
            <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '759531935737229'); 
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=759531935737229&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
