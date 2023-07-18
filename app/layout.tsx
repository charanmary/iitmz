import "@/styles/globals.css";
import { Lato, Raleway } from "next/font/google";
import Header from "@/components/header";
// import Footer from "@/components/footer";
import Script from "next/script";

const lato = Lato({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "IIT Madras Zanzibar Campus",
  description: "IIT Madras Zanzibar Campus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-W83G8RX3YK" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W83G8RX3YK');
        `}
      </Script>
      <body className={`${lato.className}${raleway.className}`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
