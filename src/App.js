import Card from "./components/card/Card";
import "./App.scss";
import data from "./helper/data";
import logoReact from "./assets/react.svg";

// {data.map((item) => {
//   const { name, img, options } = item;
//   console.log(name);
// })}

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={logoReact} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="title">
          <h2>Languages</h2>
        </div>
        {data.map((item, index) => {
          const { name, img, options } = item;
          return <Card key={index} name={name} img={img} options={options} />;
        })}
      </div>
    </div>
  );
};

export default App;
