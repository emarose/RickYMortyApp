import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";
import axios from "axios";
import { GiWorld } from 'react-icons/gi';

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  // let api = `https://rickandmortyapi.com/api/location/${number}`;

  const rickAndMortyHTPP = axios.create({
    baseURL: `https://rickandmortyapi.com/api/location`
 });
 const rickAndMorty2HTPP = axios.create();

  let params=`${number}`;
  let url="";
  let aux=[];

  useEffect(() => {
    (async function () {

      await rickAndMortyHTPP.get(`${params}`)
      .then(response=>{
        setInfo(response.data)
        url=response.data.residents;
      })

     await url.map((el)=>{

      rickAndMorty2HTPP.get(el)
      .then(response=>{
        aux=[...aux,response.data]
        setResults(aux);
      })
     })

      // let data = await fetch(api).then((res) => res.json());
      // setInfo(data);

      // let a = await Promise.all(
      //   data.residents.map((x) => {

      //     return fetch(x).then((res) => res.json());
      //   })
      // );
      // setResults(a);
    })();
  }, [params]);

  return (
    <div className="container">
        <div className="titleWrap mt-0 mb-5">
          <h1 className="homeTitle text-center episodesTitle" data-aos="fade-in">Locations</h1>
        </div>
      <div className="row mb-3">
      
      <div className="episodesWrapper mb-5" data-aos="fade-in">
          <h2 className="text-center mb-3">
            Episode: {" "}
            <span className="episodeName">{name === "" ? "Unknown" : name}</span>
          </h2>
          <h5 className="text-center">
          <GiWorld size="1.7rem" />  Dimension: {dimension === "" ? "Unknown" : dimension}
          </h5>
          <h6 className="text-center fs-4">Type: <span style={{color:"var(--blue-clr)"}}> <b> {type === "" ? "Unknown" : type}</b></span></h6>
      </div>

      </div>
      <div className="row">
        <div className="col-lg-3 col-8 mb-4">
          <h4 className="text-center pickEpisode mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-9 col-12">
          <div className="gridContainer">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
