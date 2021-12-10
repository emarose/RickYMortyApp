import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";
import Create from "../Custom/Create/Create"
import axios from "axios";
import './Home.css'

export const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [axiosData, setAxios] = useState([]);
  let { info, results } = axiosData;

  const rickAndMortyHTPP = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character`
  });

  let params = `/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      await rickAndMortyHTPP.get(`${params}`)
        .then(response => setAxios(response.data))
    })();
  }, [rickAndMortyHTPP, params]);

  return (
    <div className="container">
      <div className="titleWrap">
        <h1 className="homeTitle text-center">Rick & Morty</h1>
      </div>
      <div className="row">
        <Filter
          pageNumber={pageNumber}
          status={status}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber} />
        {/*   <Create /> */}
        <div className="col-lg-8 col-12">
          <div className="gridContainer">
            <Card page="/" results={results} />
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};