import { useState, useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export function useGlobalProvider() {
  const [char, setChar] = useState([]);
  const [searching, setSearching] = useState(false);

  return { char, setChar, searching, setSearching }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}