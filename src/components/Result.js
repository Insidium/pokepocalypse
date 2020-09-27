import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Result() {
  const [evilName, setEvilName] = useState("");
  const [evilFace, setEvilFace] = useState("");

  useEffect(() => {
    const getEvilmon = async () => {
      const array = [];
      let randomId = Math.floor(Math.random() * (151 - 1 + 1) + 1);
      try {
        const getMonById = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
        const res = await axios.get(getMonById);
        array.push(res.data);
        setEvilName(res.data.name.toUpperCase());
        setEvilFace(res.data.sprites.front_default);
      } catch (error) {
        console.log(error);
      }
    };
    getEvilmon();
  }, []);

  return (
    <div>
      <Link to='/' className='btn btn-lg btn-link d-flex go-back'>
        {"<< "}
        RUN BACK HOME
      </Link>
      <div>
        <h1 className='heading'>Oh (no)!</h1>
        <img src={evilFace} className='App-logo' alt='Random Pokemon attacker' />
        <p className='exclaim'>
          A wild (rabid) <span>{evilName}</span> has appeared! Yikes. Yeah, you're done for.
        </p>
        <p>Although... there may be one way to survive...</p>
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
