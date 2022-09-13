import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../reducer";
import Toggler from "../components/Toggler";
import Head from "next/head";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const addToCart = (slug, qty, product) => {
    let newCart = cart;

    const searchIndex = cart.findIndex((item) => item.slug == slug);

    if (searchIndex > -1) {
      cart[searchIndex].qty = cart[searchIndex].qty + qty;
      setCart(cart);
    } else {
      newCart.push({
        slug: slug,
        qty: qty,
        price: product.price,
        name: product.name,
        image: product.image,
        category: product.category,
        currency: product.currency,
      });
      setCart(newCart);
    }

    // calculating cart item count
    cartQty = cartQty + qty;
    setCartQty(cartQty);
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-footer.png" />
        <title>Wasatch Ski Company</title>
      </Head>
      <StateProvider reducer={reducer} initialState={initialState}>
        <Toggler />
        <Navbar cartQty={cartQty} />
        <Component cart={cart} addToCart={addToCart} {...pageProps} />
        <Footer />
      </StateProvider>
    </>
  );
}

export default MyApp;
