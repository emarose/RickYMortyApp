import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";
import axios from "axios";

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
    }, [params]);

    return (
      <div className="App">
        <h1 className="text-center my-5">Characters</h1>
        
        <div className="container">
          <div className="row">
            <Filter
              pageNumber={pageNumber}
              status={status}
              updateStatus={updateStatus}
              updateGender={updateGender}
              updateSpecies={updateSpecies}
              updatePageNumber={updatePageNumber}
            />
            <div className="col-md-8 col-sm-12">
              <div className="row">
                <Card page="/" results={results} />
              </div>
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