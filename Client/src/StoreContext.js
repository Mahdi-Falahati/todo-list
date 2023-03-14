import { createContext, useState } from "react";
export const StoreContext = createContext();

export function StoreContextProvider({ children }) {
  const [store, setStore] = useState(false);
  const [modal, setModal] = useState(false);
  
  const storeSetterToggle = (validate) => {
    setStore(validate);
  };

  const setModalToggle = () => {
    setModal(!modal);
  };
  
  return (
    <StoreContext.Provider
      value={{ store, modal, setModalToggle, storeSetterToggle }}
    >
      {children}
    </StoreContext.Provider>
  );
}
