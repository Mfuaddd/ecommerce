import React, { useContext } from "react";
import { wishlistContext } from "../../contexts/WishlistContext";
import "./index.scss"
import SalesCard from "../SalesCard";
import { basketContext } from "../../contexts/BasketContext";

function WishlistSection() {
  const { wishlist, ToggleWishlist } = useContext(wishlistContext);
  const { addToBasket } = useContext(basketContext);


  function handleMoveToBasket() {
    wishlist.map(x=>addToBasket(x))
  }
  return (
    <div className="wishlist">
      <div className="container">
        <div className="wishlist__head flex flex--justify-between flex--align-center">
          <div className="wishlist__head__count">Wishlist ({wishlist.length})</div>
          <div className="wishlist__head__tobag" onClick={handleMoveToBasket}>Move All To Bag</div>
        </div>
        <div className="wishlist__cards">
          {wishlist.map(x=>(<SalesCard key={x.id} x={x} isHome={false}/>))}
        </div>
      </div>
    </div>
  );
}

export default WishlistSection;
