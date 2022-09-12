import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </StateProvider>
  );
}

export default MyApp;
