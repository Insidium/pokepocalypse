import React from "react";
import { Link } from "react-router-dom";
import zombichu from "../zombichu.jpg";

export default function Result() {
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
