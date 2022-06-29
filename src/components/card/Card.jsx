import { useState } from "react";
import "./Cards.scss";

const Card = ({ name, img, options }) => {
  const [select, setSelect] = useState(true);
  const [check, setCheck] = useState(true);

  const clickHandler = () => {
    // setSelect(!select);
    setCheck(!check);
  };
  const flip = () => {
    setSelect(!select);
    clickHandler();
  };
  return (
    <div className="container" onClick={flip}>
      <div className="cards">
        {select && (
          <>
            <div className="langCards">
              <img src={img} alt="" />
              <p>{name}</p>
            </div>
          </>
        )}
        {!select &&
          options.map((info) => {
            return (
              <div className="infoCards">
                <ul>
                  <li>{info}</li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
