import { createContext, useState } from "react";
export const StoreContext = createContext();

export function StoreContextProvider({ children }) {
  const [store, setStore] = useState(false);
  const storeSetterToggle = (validate) => {
    setStore(validate);
  };
  return (
    <StoreContext.Provider value={{ store, storeSetterToggle }}>
      {children}
    </StoreContext.Provider>
  );
}