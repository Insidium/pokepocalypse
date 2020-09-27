import React from "react";
import { Link } from "react-router-dom";
import zombichu from "../zombichu.jpg";

export default function Home() {
  return (
    <div className='container'>
      <h1 className='home-heading'>POKÉPOCALYPSE</h1>
      <img src={zombichu} className='App-logo' alt='zombie Pikachu' />
      <p>Just when you thought it was feeling less horrible to be in 2020...</p>
      <p>Pokemon have entered our reality and are now terrifying pokéghouls.</p>
      <p>
        Oh and their unified mantra is <span className='red'>"Gotta kill 'em all!"</span>
      </p>
      <Link role='button' to='/result' className='btn btn-lg btn-danger button-buffer'>
        Click to see which undead fuzzball will be your doom!
      </Link>
    </div>
  );
}
