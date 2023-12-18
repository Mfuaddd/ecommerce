import React, { useContext, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { basketContext } from "../../contexts/BasketContext";

function Cart() {
  const { basket, removeFromBasket, setCountValue, increaseCount, totalPrice } =
    useContext(basketContext);

  function key(e) {
    e.preventDefault();
  }
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__head">
          <Link to="/">Home /</Link> Cart
        </div>
        <div className="cart__table table">
          <div className="table__tr">
            <div className="table__th">Product</div>
            <div className="table__th">Price</div>
            <div className="table__th">Quantity</div>
            <div className="table__th">Subtotal</div>
          </div>
          {basket.map((x) => (
            <div key={x.id} className="table__tr flex flex--align-center">
              <div className="table__td flex flex--align-center">
                <img className="cart__image" src={x.thumbnail} alt="" />
                <dir onClick={() => increaseCount(x)}>
                  {x.name.toLowerCase().split(" ").slice(0, 3).join(" ")}
                </dir>
              </div>
              <div className="table__td">${x.price}</div>
              <div className="table__td">
                <input
                  type="number"
                  className="cart__count"
                  onKeyDown={(e) => key(e)}
                  onInput={(e) => setCountValue(x, e.target.value)}
                  value={x.count}
                />
              </div>
              <div className="table__td">
                ${parseFloat(x.price * x.count).toFixed(2)}
              </div>
              <div
                className="table__tr__close"
                onClick={() => removeFromBasket(x)}
              >
                &#x2716;
              </div>
            </div>
          ))}
        </div>
        <div className="cart__btns flex flex--align-center flex--justify-between">
          <Link to="/">
            <div className="cart__btn cart__return">Return To Shop</div>
          </Link>
          <div className="cart__btn cart__update">Update Cart</div>
        </div>
        <div className="flex flex--justify-between">
          <div className="cart__coupon">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>
          <div className="cart__total">
            <div className="cart__total__head">Cart Total</div>
            <div className="flex flex--align-center flex--justify-between">
              <div className="cart__total__title">Subtotal:</div>
              <div className="cart__total__title">
                ${totalPrice().toFixed(2)}
              </div>
            </div>
            <hr />
            <div className="flex flex--align-center flex--justify-between">
              <div className="cart__total__title">Shipping:</div>
              <div className="cart__total__title">Free</div>
            </div>
            <hr />
            <div className="flex flex--align-center flex--justify-between">
              <div className="cart__total__title">Total:</div>
              <div className="cart__total__title">
                ${totalPrice().toFixed(2)}
              </div>
            </div>
            <div className="cart__total__btn">Procees to checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
