import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";
import axios from "axios";
import "./Episodes.css";
import { MdDateRange } from 'react-icons/md';

const Episodes = () => {

  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;/* delete episode */
  let [id, setID] = useState(1);


  const rickAndMortyHTPP = axios.create({
    baseURL: `https://rickandmortyapi.com/api/episode`
  });
  const rickAndMorty2HTPP = axios.create();

  let params = `${id}`;
  // let api = `https://rickandmortyapi.com/api/episode/${id}`;
  let url = "";
  let aux = [];

  useEffect(() => {
    (async function () {

      await rickAndMortyHTPP.get(`${params}`)
        .then(response => {
          setInfo(response.data)
          url = response.data.characters;
        })

      await url.map((el) => {
        rickAndMorty2HTPP.get(el)
          .then(response => {
            aux = [...aux, response.data]
            setResults(aux);
          })
      })

      // let data = await fetch(api).then((res) => res.json());
      // setInfo(data);

      // let a = await Promise.all(
      //   data.characters.map((x) => {
      //     return fetch(x).then((res) => res.json());
      //   })
      // );
      // setResults(a);
    })();
  }, [params]);

  return (
    <div className="container episodesContainer">
      <div className="row mb-5">
        <div className="titleWrap mt-0 mb-5">
          <h1 className="homeTitle text-center episodesTitle">Episodes</h1>
        </div>
       
       <div className="episodesWrapper">
          <h2 className="text-center mb-3">
            Episode name: {" "}
            <span className="episodeName">{name === "" ? "Unknown" : name}</span>
          </h2>
          <h5 className="text-center">
            <MdDateRange size="1.7em" /> Air Date: {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>
      </div>

      
      <div className="row">
        
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center pickEpisode mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>

        <div className="col-lg-8 col-12">
          <div className="gridContainer">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
