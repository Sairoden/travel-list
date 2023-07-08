import { useContext, createContext, useState, useEffect } from "react";

const ItemContext = createContext({});

const localItems = JSON.parse(localStorage.getItem("items"));

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(localItems || []);

  useEffect(() => {
    if (items) localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const value = { items, setItems };
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export const useItemContext = () => useContext(ItemContext);
