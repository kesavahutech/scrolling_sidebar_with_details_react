import { useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Details from "./Components/Details/Details";

function App() {
  const [detail, setDetail] = useState(null);
  const clickHandler = (detail) => {
    setDetail(detail);
  }
  return (
    <>
      <header className="header-top">
        <span>Food Items</span>
      </header>
      <div className="body">
        <CardList clickHandler={clickHandler} />
        <div className="detail-div">{detail && <Details detail={detail}/>}</div>
      </div>
    </>
  );
}

export default App;
