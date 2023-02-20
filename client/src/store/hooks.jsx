import { useContext } from "react";
import AppContext from "./Context";

export const useStore = () => {
  const [state, dispatch] = useContext(AppContext);
  return [state, dispatch];
};
