import { useGlobalContext } from '../../context/ContextProvider';
import './style.css';
import api from '../../services/api'

export default function NavBar() {

  const { setChar, setNotFound } = useGlobalContext();

  async function getSearch(e) {
    e.preventDefault()
    let name = e.target.name.value;
    if (name == '') return setChar()
    try {
      let response = await api.get(`/character/?name=${name}`);
      setChar(response.data.results);
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
      setChar([response.data])
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <nav>
        <div className="logo-container">
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
          <button className='all'>Show All</button>
        </div>
      </nav>
    </>
  )
}