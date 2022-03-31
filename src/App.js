// import { Component } from "react";
import React, { useEffect, useState } from "react";

import "./App.css";
import CardList from "./compnents/Card-List/Card-list";
import SearchBox from "./compnents/search-box/SearchBox";

//Functional components

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monster, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monster);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setMonster(user));
  }, []);

  useEffect(() => {
    const filteredMonster = monster.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonster);
  }, [monster, searchField]);

  const onSearchChange = (e) => {
    const searchFieldStr = e.target.value.toLowerCase();
    setSearchField(searchFieldStr);
  };

  return (
    <div className="App">
      <h1 className="heading">Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monster={filteredMonsters} />
    </div>
  );
};

//Class Components
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monster: users };
//         })
//       );
//   }
//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const filteredMonster = this.state.monster.filter((item) => {
//       return item.name.toLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="heading">Monster Rolodex</h1>
//         <SearchBox onChangeHandler={this.onSearchChange} />
//         <CardList monster={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
