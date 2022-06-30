import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
import SSearch from "./style";

function Search() {
  const [employees, setEmployees] = useState([]);
  const arr = [{ name: "banane" }, { name: "pomme" }, { name: "citron" }];

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com")
      .then(({ data }) => setEmployees(data));
  }, []);
  console.warn(employees);

  return (
    <>
      <Navbar />
      <SSearch>
        <div className="test">
          <div className="avatar" />
          <p>Recherche un Apsider par nom, par compétence, par agence...</p>
          <div className="searchBar">
            <input
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Recherche"
            />
          </div>
          <div className="searchResults">
            {arr.map((employee) => {
              return (
                <div className="searchResult" key="employee.name">
                  <p>{employee.name}</p>
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
