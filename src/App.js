<<<<<<< HEAD
import Card from "./components/card/Card";
import "./App.scss";
import data from "./helper/data";
import logoReact from "./assets/react.svg";

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <div className="logo">
            <img src={logoReact} alt="" />
          </div>
        </div>
        <div className="card">
          <h2 className="title">Languages</h2>

          {data.map((info, index) => {
            return <Card key={index} {...info} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
=======
import Card from "./components/card/Card";
import "./App.scss";
import data from "./helper/data";
import logoReact from "./assets/react.svg";

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <div className="logo">
            <img src={logoReact} alt="" />
          </div>
        </div>
        <div className="card">
          <h2 className="title">Languages</h2>

          {data.map((info, index) => {
            return <Card key={index} {...info} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
>>>>>>> 08a2f3c0dc8c7844e8134e3b568e5551a1cd27c5
