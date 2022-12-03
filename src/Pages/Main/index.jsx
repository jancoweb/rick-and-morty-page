import NavBar from "../../components/Nav";
import { useGlobalContext } from "../../context/ContextProvider";
import './style.css';
import GetChar from "../../components/Char";


export default function MainPage() {

  const { char, notFound } = useGlobalContext();

  return (
    <div className="main-page-wrapper">
      <img src="https://images.squarespace-cdn.com/content/v1/57433cc43c44d8db180cd231/1546962591286-A0IL1S8JTZKQMS0MOEJP/rick-animated-head-Burp.gif?format=2500w" style={{ display: char ? 'none' : '' }} />
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