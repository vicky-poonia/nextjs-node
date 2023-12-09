import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "../styles/css/layout.scss";
import "../styles/css/homepage.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
