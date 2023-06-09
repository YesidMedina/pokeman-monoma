import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AllPokemon } from "../../interfaces/pokemon";
interface Props {
  pokemon: AllPokemon;
}

export const PokemonHome: React.FC<Props> = ({ pokemon }) => {

  const navigate = useNavigate()

  const [ idPokemon, setIdPokemon ] = useState(1);
  const [ sourceImage, setSourceImage ] = useState("");
  const [ weights, setWeights ] = useState(0);
  const [ abilities, setAbilities ] = useState("");
  const [ twoAbilities, setTowAbilities ] = useState("");

  const getSourceImage = async () => {
    const respData = await axios.get( pokemon.url );

    setIdPokemon( respData.data.id );

    const images = respData.data.sprites.other;
    const { "official-artwork": officialArtwork } = images;
    setSourceImage( officialArtwork.front_default );

    const weight = respData.data.weight;
    setWeights( weight / 10 );

    const power = respData.data;
    const { abilities: [{ ability }] } = power;
    setAbilities( ability.name );

    const powerTwo = respData.data.abilities[1].ability.name;
    setTowAbilities( powerTwo ); 
  };

  const token = localStorage.getItem( 'token' )
    if( !token ) {
      navigate( '/login' )
      toast.error( "invalid token" );
    }

  useEffect(() => {
    getSourceImage();
  }, [ pokemon ]);

  return (
    <>
      <div className="border shadow-xl rounded-2xl px-3 py-3 mb-4">
        <Link to={`/card/${ idPokemon }`}>
          <img
            className="w-full col-span-2 row-span-2 rounded "
            src={ sourceImage }
            alt=""
          />
        </Link>
        <p className="float-right w-1/2 text-center text-white
            bg-green-500 rounded-full hover:bg-green-800">
          { weights } k
        </p>

        <hr className="mt-8 bg-slate-400 w-auto" />

        <h5 className="mb-6 mt-8 text-2xl font-bold tracking-tight text-green-800
            dark:text-white capitalize">
          { pokemon.name }
        </h5>
        <p className=" text-green-800 capitalize">#{ abilities }{' '} #{ twoAbilities }</p> 
      </div>
    </>
  );
};
