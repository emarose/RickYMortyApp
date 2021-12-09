import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";
import axios from "axios";

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
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
