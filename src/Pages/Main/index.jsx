import NavBar from "../../components/Nav";
import { useGlobalContext } from "../../context/ContextProvider";
import './style.css';
import GetChar from "../../components/Char";


export default function MainPage() {

  const { char, setChar } = useGlobalContext();

  return (
    <div className="main-page-wrapper">
      <NavBar />
      {char &&
        < GetChar />
      }
    </div>
  )
}