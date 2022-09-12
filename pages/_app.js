import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../reducer";
import Toggler from "../components/Toggler";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-footer.png" />
        <title>Wasatch Ski Company</title>
      </Head>
      <StateProvider reducer={reducer} initialState={initialState}>
        <Toggler />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </StateProvider>
    </>
  );
}

export default MyApp;
