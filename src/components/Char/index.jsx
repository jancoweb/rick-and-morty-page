import { useGlobalContext } from "../../context/ContextProvider";
import './style.css'

export default function GetChar() {

  const { char } = useGlobalContext()

  if (char == undefined || char == '') return

  return (
    <>
      {char &&
        <div className="char-card">
          <div className="left-side">
            <img src={char.image} alt="" />
            <h1>{char.name}</h1>
          </div>
          <div className="right-side">
            <h3>Species: {char.species}</h3>
            <h3>Status: <span style={{ color: char.status == 'Dead' ? '#fb6467ff' : char.status == 'Alive' ? '#8bcf21' : '#fff' }}>{char.status}</span></h3>
            <h3>Origin: {char.origin.name}</h3>
            <h3>Last seen: {char.location.name}</h3>
          </div>
        </div>
      }
    </>
  )
}