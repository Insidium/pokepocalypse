import React from "react";
import { Link } from "react-router-dom";
import zombichu from "../zombichu.jpg";

export default function Home() {
  return (
    <div className='container'>
      <h1 className='home-heading'>POKEPOCALYPSE</h1>
      <img src={zombichu} className='App-logo' alt='zombie Pikachu' />
      <p>Just when you thought it was feeling less horrible to be in 2020...</p>
      <p>Pokemon have entered our reality and are actually vicious and terrifying ghouls.</p>
      <p>
        Oh and their unified mantra is <span className=''>"Gotta kill 'em all!"</span>
      </p>
      <Link role='button' to='/result' className='btn btn-lg btn-danger'>
        Which undead fuzzball will be your doom?
      </Link>
    </div>
  );
}
