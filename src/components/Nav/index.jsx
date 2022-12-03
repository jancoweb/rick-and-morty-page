import { useGlobalContext } from '../../context/ContextProvider';
import './style.css';
import api from '../../services/api'

export default function NavBar() {

  const { setChar } = useGlobalContext();

  async function getSearch(e) {
    e.preventDefault()
    let name = e.target.name.value;
    if (name == '') return setChar()
    try {
      let response = await api.get(`/character/?name=${name}`);
      setChar(response.data.results);
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
          <button className='random'>Random Search</button>
        </div>
        <div className="show-all-btn-container">
          <button className='all'>Show All</button>
        </div>
      </nav>
    </>
  )
}