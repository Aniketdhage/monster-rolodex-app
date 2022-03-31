// import { Component } from "react";
import React from "react";
import "./card-list-style.css";

const CardList = ({ monster }) => (
  <div className="card-list">
    {monster.map((item) => {
      return (
        <div className="card-container" key={item.id}>
          <img
            src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
            alt={item.name}
          />
          <h2>{item.name}</h2>
          <p>{item.email}</p>
        </div>
      );
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monster } = this.props;

//     return (
//       <div className="card-list">
//         {monster.map((item) => {
//           return (
//             <div className="card-container" key={item.id}>
//               <img
//                 src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
//                 alt={item.name}
//               />
//               <h2>{item.name}</h2>
//               <p>{item.email}</p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
export default CardList;
