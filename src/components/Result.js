import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import zombichu from "../zombichu.jpg";

export default function Result() {
  const [evilmon, setEvilmon] = useState("bulbasaur");
  const [evilData, setEvilData] = useState([]);

  const getEvilmon = async () => {
    const array = [];
    try {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${evilmon}`;
      const res = await axios.get(apiUrl);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvilmon();
  }, []);
  return (
    <div>
      <Link to='/' className='btn btn-lg btn-link d-flex go-back'>
        {"<< "}
        Run Back Home
      </Link>
      <div>
        <h1 className='heading'>Oh (no)!</h1>
        <img src={zombichu} className='App-logo' alt='Random Pokemon attacker' />
        <p className='exclaim'>A wild XXXX has appeared!</p>
        <p>According to poké-folklore, this may be your only hope...</p>
        <a
          role='button'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.youtube.com/watch?v=oHg5SJYRHA0'
          className='btn btn-lg btn-outline-success button-buffer'
        >
          <strong>TRY ANCIENT DISTRACTION RITUAL</strong>
        </a>
      </div>
    </div>
  );
}
