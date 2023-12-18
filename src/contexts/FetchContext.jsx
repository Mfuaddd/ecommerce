import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const fetchContext = createContext();

function FetchProvider({ children }) {
  const [apiData, setApiData] = useState([])

  async function getFetch(){
    const res = await fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
    const data = await res.json()
    setApiData(data)
  }

  const data = {
    apiData,getFetch
  };
  return (
  <fetchContext.Provider value={data}>
    {children}
  </fetchContext.Provider>
  )
}

export default FetchProvider;
