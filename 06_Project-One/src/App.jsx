// import './App.css'
import { useState } from "react";

function App() {
  let [bgColor, setbgColor] = useState("grey");
  function bgChanger(e){
          setbgColor(window.getComputedStyle(e.target).backgroundColor)
  }
  return (
    <>
      <div
        id="container"
        style={{ backgroundColor: `${bgColor}` }}
        className="h-screen w-screen m-0   flex justify-center items-end "
      >
        <div>
          <div className="w-3xl    h-20  relative bottom-10  flex justify-evenly items-center">
            <div
            onClick={bgChanger}
              style={{ backgroundColor: `blue`, cursor:"pointer" }}
              className="w-1/12 rounded-2xl h-3/4 border-4 border-black"
            ></div>
            <div
            onClick={bgChanger}
              style={{ backgroundColor: `green`, cursor:"pointer" }}
              className="w-1/12 rounded-2xl h-3/4 border-4 border-black"
            ></div>
            <div
            onClick={bgChanger}
              style={{ backgroundColor: `yellow`, cursor:"pointer" }}
              className="w-1/12 rounded-2xl h-3/4 border-4 border-black"
            ></div>
            <div
            onClick={bgChanger}
              style={{ backgroundColor: `pink`, cursor:"pointer" }}
              className="w-1/12 rounded-2xl h-3/4 border-4 border-black"
            ></div>
            <div
            onClick={bgChanger}
              style={{ backgroundColor: `cyan`, cursor:"pointer" }}
              className="w-1/12 rounded-2xl h-3/4 border-4 border-black"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
