import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CardDetails.css'
import axios from "axios";

const CardDetails = () => {
  let { id } = useParams();

  let [axiosData, setAxios] = useState([]);
  let { name, location, origin, gender, image, status, species } = axiosData;


  const rickAndMortyHTPP = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character`
 });

 let params=`${id}`;
  

  useEffect(() => {
    (async function () {
      
      await rickAndMortyHTPP.get(`${params}`)
      .then(response=>setAxios(response.data))
      
    })();
  }, [params, rickAndMortyHTPP]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div>
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div>
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div>
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div>
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
