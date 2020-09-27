import React from "react";
import { Link } from "react-router-dom";
import zombichu from "../zombichu.jpg";

export default function Home() {
  return (
    <div className='container'>
      <h1 className='heading'>POKÉPOCALYPSE</h1>
      <img src={zombichu} className='App-logo' alt='zombie Pikachu' />
      <p className='exclaim'>Just when you thought it was feeling less horrible to be in 2020...</p>
      <p>Pokémon (yep, them) have entered our reality and are now terrifying poké-ghouls.</p>
      <p>
        Oh and their unified mantra is <span className='red'>"Gotta kill 'em all!"</span>
      </p>
      <Link role='button' to='/result' className='btn btn-lg btn-outline-danger button-buffer'>
        <strong>WHICH FERAL FUZZBALL WILL BE YOUR DOOM?</strong>
      </Link>
    </div>
  );
}
