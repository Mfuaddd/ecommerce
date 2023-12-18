import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const wishlistContext = createContext();

function WishlistProvider({children}) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist",[])
  
  function toggleWishlist(item) {
    const index = wishlist.findIndex(x=>x.id === item.id)
    if(index === -1){
        setWishlist([...wishlist,item])
        return
    }
    setWishlist(wishlist.filter(x=>x.id !== item.id))
  }
  
  
  
    const data = {
        wishlist,toggleWishlist
    };

  return (
    <wishlistContext.Provider value={data}>
      {children}
    </wishlistContext.Provider>
  );
}

export default WishlistProvider;
