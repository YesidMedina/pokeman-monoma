import { useEffect, useState } from "react";
import { Navbar } from "../navbar/components/Navbar";
import * as GetPokemons from "../helpers/GetPokemons";
import { PokemonHome } from "../components/pokemon/PokemonHome";
import { AllPokemon } from "../interfaces/pokemon";

export const PokemonPage = () => {
  const [ pokemons, setPokemons ] = useState([]);
  const [ current, setCurrent ] = useState( 0 );
  const [ counter, setCounter ] = useState( 1 );

  const cars = async () => {
    const resp = await GetPokemons.getPokemons();
    setPokemons( resp.data.results );
  };

  // Pagination

  const filter = (): AllPokemon[] => {
    return pokemons.slice( current, current + 10 );
  };

  const next = () => {
    setCurrent( current + 10 );
  };

  const back = () => {
    if ( current > 0 ) setCurrent( current - 10 );
  };

  const increase = () => {
    if ( counter < 92 ) setCounter(( count ) => count + 1);
  };

  const decrease = () => {
    if ( counter > 1 ) setCounter( (count) => count - 1 );
    console.log( decrease );
  };

  useEffect(() => {
    cars();
  }, []);

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-5 lg:gap-3 lg:grid-cols-5 p-12 px-16 mx-auto">
        { filter().map(( pokemon, index ) => {
          return <PokemonHome pokemon={ pokemon } key={ index } />;
        }) }
      </div>
      <div className="justify-center p-12 px-16 mx-auto -mt-16 content-between">
        <button
          className="w-28 mx-auto text-center py-3 bg-green-200
              hover:bg-green-600/50 text-black rounded-lg"
          onClick={ back }
          onClickCapture={ decrease }
        >
          Back
        </button>

        <button
          className="float-right w-28 mx-autotext-center py-3 bg-green-200
              hover:bg-green-600/50 text-black rounded-lg"
          onClick={ next }
          onClickCapture={ increase }
        >
          Next
        </button>

        <div className="-mt-10 realtivo w-20 items-center mx-auto py-2 font-mono text-center
            text-black bg-green-500 bg-gradient-to-br from-green-400 rounded-lg ">
          { counter }
        </div>
      </div>
    </>
  );
};
