import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Header from "@components/Header";
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
      <Header />
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
                    .includes(searchTerm.toString().toLowerCase()) ||
                  val.skills
                    .toString()
                    .toLowerCase()
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase()) ||
                  val.agency
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
                    <Link to={`/collaborateurs/${val.id}`}>
                      <h2>
                        {val.firstname} {val.lastname}
                      </h2>
                    </Link>
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
