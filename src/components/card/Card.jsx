import React from "react";
import { useState } from "react";
import "./Cards.scss";

const Card = ({ name, img, options }) => {
  const [select, setSelect] = useState(true);

  return (
    <main>
      <div className="container" onClick={() => setSelect(!select)}>
        {select ? (
          <div className="langCards">
            <img src={img} alt="" />
            <p>{name}</p>
          </div>
        ) : (
          <div>
            <ul className="infoCards">
              {options.map((info, index) => {
                return <li key={index}>{info}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default Card;

// const [isToggle, setToggle] = useState(true);

// const clickHandler = () => {
//   setToggle(!isToggle);
// };
// const flip = () => {
//   setSelect(!select);
//   clickHandler();
// };

//  {/* <div className="cards">
//         {select && (
//           <>
//             <div className="langCards">
//               <img src={img} alt="" />
//               <p>{name}</p>
//             </div>
//           </>
//         )}
//         {!select &&
//           options.map((info, index) => {
//             return (
//               <ul className="infoCards">
//                 <li key={index}>{info}</li>
//               </ul>
//             );
//           })}
//       </div> */}

// const { name, img, options } = info;
