import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const basketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addToBasket(item) {
    const temp = []
    console.log(item);
    [...item].map(it=>{
      console.log(it);
      const index = basket.findIndex((x) => x.id === it.id);
      if (index === -1) {
        temp.push({ ...it, count: 1 })
        // setBasket([...basket, { ...it, count: 1 }]);
      }
    })
    setBasket([...basket,...temp])
    // const index = basket.findIndex((x) => x.id === item.id);
    // console.log(index);
    // if (index === -1) {
    //   setBasket([...basket, { ...item, count: 1 }]);
    //   return;
    // }
  }

  function removeFromBasket(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }

  function increaseCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    basket[index].count++;
    setBasket([...basket]);
    console.log("aaa");
  }

  function decreaseCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (basket[index].count >= 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }

  function setCountValue(item, c) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (c < 1) {
      return;
    }
    basket[index].count = +c;
    // console.log(index, item, +c, basket[index].count);
    setBasket([...basket]);
  }

  function totalPrice() {
    return basket.reduce((prev, curr) => prev + curr.price * curr.count, 0);
  }

  const data = {
    basket,
    addToBasket,
    removeFromBasket,
    increaseCount,
    decreaseCount,
    setCountValue,
    totalPrice,
  };

  return (
    <basketContext.Provider value={data}>{children}</basketContext.Provider>
  );
}

export default BasketProvider;
