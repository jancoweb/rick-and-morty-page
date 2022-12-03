import { useGlobalContext } from '../../context/ContextProvider';
import './style.css';
import api from '../../services/api'
import { useEffect } from 'react';

export default function NavBar() {

  const { setChar, setNotFound, setAllChars, setPage } = useGlobalContext();

  async function getAll() {
    try {
      let response = await api.get('/character');
      let data = response.data.results;
      setChar()
      setAllChars(data);
      setPage(1)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function getSearch(e) {
    e.preventDefault()
    let name = e.target.name.value;
    if (name == '') return setChar()
    try {
      let response = await api.get(`/character/?name=${name}`);
      setChar(response.data.results[0]);
      setAllChars()
      setNotFound(false)
    } catch (error) {
      console.log(error.message)
      setChar()
      setNotFound(true)
    }
  }

  async function getRandomSearch() {
    let id = Math.floor(Math.random() * 826)
    if (id == 0) id = 1;

    try {
      let response = await api.get(`/character/${id}`);
      setChar(response.data)
      setAllChars()
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    setChar()
  }, [])

  return (
    <>
      <nav>
        <div className="logo-container" onClick={() => { setChar(), setAllChars(), setNotFound(), setPage(1) }}>
          <img src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" style={{ width: '180px' }} />
        </div>
        <div className="search-bar-container">
          <form onSubmit={(e) => { getSearch(e) }}>
            <input type="text" placeholder="Search now" name='name' />
            <button className='search' type="submit">Search</button>
          </form>
          <button className='random' onClick={() => getRandomSearch()}>Random Search</button>
        </div>
        <div className="show-all-btn-container">
          <button className='all' onClick={() => getAll()}>Show All</button>
        </div>
      </nav>
    </>
  )
}