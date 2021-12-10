import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";
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

    let params=`/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
      ( async function () {
        await rickAndMortyHTPP.get(`${params}`)
        .then(response=>setAxios(response.data))
      })();
    }, [rickAndMortyHTPP, params]);

    return (
      <>
      <div className="titleWrap">
        <h1 className="homeTitle text-center">Rick & Morty 
        <p className="fs-2">Database</p>
        </h1>
      </div>
        <h2 className="text-center mb-5">Characters</h2>
        <div className="filterContainer">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}/>

            <div className="gridContainer">
              <Card page="/" results={results} />
            </div>
          </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
      </>
    );
  };