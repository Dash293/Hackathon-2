import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import SSearch from "./style";

function Search() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/collaborateurs`)
      .then(({ data }) => setEmployees(data));
  }, []);

  const handleSearchTerm = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <>
      <Navbar />
      <Title title="Salarié du groupe" />
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
              onChange={handleSearchTerm}
            />
          </div>
          <div className="searchResults">
            {employees
              .filter((val) => {
                return (
                  val.firstname
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase()) ||
                  val.lastname
                    .toString()
                    .toLowerCase()
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase()) ||
                  val.role
                    .toString()
                    .toLowerCase()
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase())
                );
              })
              .map((val, index) => {
                return (
                  <div
                    className={index % 2 === 0 ? "searchGrey" : "searchBlue"}
                    key="val.name"
                  >
                    <h2>
                      {val.firstname} {val.lastname}
                    </h2>
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