// import { Component } from "react";
import React from "react";

const SearchBox = ({ onChangeHandler }) => (
  <div>
    <input
      className="search-box"
      type="text"
      placeholder="Search"
      onChange={onChangeHandler}
    />
  </div>
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           className="search-box"
//           type="text"
//           placeholder="Search"
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
// }
// /}

export default SearchBox;
