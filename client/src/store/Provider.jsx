import { useReducer } from "react";
import AppContext from "./Context";
import reducer, { initialState } from "./reducer";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
