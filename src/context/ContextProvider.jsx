import { useState, useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export function useGlobalProvider() {
  const [char, setChar] = useState();
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [allChars, setAllChars] = useState();
  const [page, setPage] = useState(1);

  return { char, setChar, searching, setSearching, notFound, setNotFound, allChars, setAllChars, page, setPage }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}