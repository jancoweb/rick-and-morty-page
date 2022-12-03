import NavBar from "../../components/Nav";
import { useGlobalContext } from "../../context/ContextProvider";
import './style.css';
import GetChar from "../../components/Char";


export default function MainPage() {

  const { char, notFound } = useGlobalContext();

  return (
    <div className="main-page-wrapper">
      <NavBar />
      {notFound &&
        <div className="not-found-message">
          <h1 >Character not found!</h1>
          <h4>make sure you type the name right</h4>
        </div>
      }
      {char &&
        < GetChar />
      }
    </div>
  )
}