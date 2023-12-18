import React from "react";
import FetchProvider from "./FetchContext";
import WishlistProvider from "./WishlistContext";
import BasketProvider from "./BasketContext";

function MainProvider({ children }) {
  return (
    <FetchProvider>
      <BasketProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </BasketProvider>
    </FetchProvider>
  );
}

export default MainProvider;
