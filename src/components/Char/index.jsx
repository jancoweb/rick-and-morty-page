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
            <img src={char[0].image} alt="" />
            <h1>{char[0].name}</h1>
          </div>
          <div className="right-side">
            <h3>Species: {char[0].species}</h3>
            <h3>Status: {char[0].status}</h3>
            <h3>Origin: {char[0].origin.name}</h3>
          </div>
        </div>
      }
    </>
  )
}