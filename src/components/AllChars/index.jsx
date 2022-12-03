import { useGlobalContext } from "../../context/ContextProvider";
import api from "../../services/api";
import './style.css'
import { useEffect } from "react";

export default function AllChars() {
  const { allChars, setAllChars, page, setPage, setChar } = useGlobalContext();

  async function getData(page) {
    if (page > 42) {
      setPage(1)
    }
    if (page < 1) {
      setPage(42)
    }
    try {
      let response = await api.get(`/character?page=${page}`);
      let data = response.data.results;
      setAllChars(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function handleSelect(id) {
    try {
      let response = await api.get(`/character/${id}`);
      setChar(response.data)
      setAllChars()
    } catch (error) {

    }
  }

  useEffect(() => {
    getData(page)
  }, [page])

  return (
    <>
      <div className="all-wrapper">
        <button className="previous" onClick={() => getData(setPage(page - 1))}>{'<'}</button>
        <div className="all-chars-container">
          {allChars.map(char => (
            <div className="each" key={char.id} onClick={() => { handleSelect(char.id) }}>
              <img src={char.image} alt="" />
              <h4>{char.name}</h4>
            </div>
          ))}
        </div>
        <button className="next" onClick={() => getData(setPage(page + 1))}>{'>'}</button>
      </div>
      <h1 className="page-number">{page}</h1>
    </>
  )
}