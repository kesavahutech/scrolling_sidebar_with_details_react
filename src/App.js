import { useState } from "react";
import classes from "./App.module.css";
import CardList from "./Components/CardList/CardList";
import Details from "./Components/Details/Details";

function App() {
  const [detail, setDetail] = useState(null);
  const clickHandler = (detail) => {
    setDetail(detail);
  }
  return (
    <>
      <header className={classes.header_top}>
        <span>Food Items</span>
      </header>
      <div className={classes.body}>
        <CardList clickHandler={clickHandler} />
        <div className={classes.detail_div}>{detail && <Details detail={detail}/>}</div>
      </div>
    </>
  );
}

export default App;
