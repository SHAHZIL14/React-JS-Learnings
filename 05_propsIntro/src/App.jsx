import Card from "./Card";
import "./App.css";

function App() {
  let propObject = {
    h5: "Noteworthy technology acquisitions 2021",
    p: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    Isrc: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };
  return (
    <>
      <Card propObject={propObject} />
    </>
  );
}

export default App;
