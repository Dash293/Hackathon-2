import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import SSearch from "./style";

function Search() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const arr = [{ name: "banane" }, { name: "pomme" }, { name: "citron" }];

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com")
      .then(({ data }) => setEmployees(data));
  }, []);
  console.warn(employees);

  const handleSearchTerm = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <>
      <Navbar />
      <Title />
      <SSearch>
        <div className="container">
          <div className="avatar" />
          <p>Recherche un Apsider par nom, par compétence, par agence...</p>
          <div className="searchBar">
            <input
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Recherche"
              onClick={handleSearchTerm}
            />
          </div>
          <div className="searchResults">
            {arr
              .filter((val) => {
                return val.name.includes(searchTerm);
              })
              .map((val, index) => {
                return (
                  <div
                    className={index % 2 === 0 ? "searchGrey" : "searchBlue"}
                    key="val.name"
                  >
                    <h2>{val.name}</h2>
                  </div>
                );
              })}
          </div>
        </div>
      </SSearch>
    </>
  );
}

export default Search;
