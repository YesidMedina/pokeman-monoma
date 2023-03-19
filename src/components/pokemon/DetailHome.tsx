import axios, { AxiosResponse } from "axios";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../navbar/components/Navbar";
import { useEffect, useState } from "react";
import { API_POKEMON } from "../../helpers/GetPokemons";
import { AllPokemon } from "../../interfaces/pokemon";

export const DetailHome = () => {

  const [ pokemon, setPokemon ] = useState<AllPokemon>();
  const [ type, setType ] = useState<AxiosResponse | null | void>(null);
  const [ sourceImage, setSourceImage ] = useState("");
  const [ base, setBase ] = useState("");
  const [ height, setHeight ] = useState(0);
  const [ order, setOrder ] = useState("");
  const [ weight, setWeight ] = useState(0);
  const [ move, setMove ] = useState("");
  const [ effecty, setEffecty ] = useState();
  const [ generatons, setGenerations ] = useState();
  const [ description, setDescription ] = useState();
  
  const { id } = useParams();
  
  const getPokemonDetail = async () => {

    const respData = await axios.get( `${API_POKEMON}/pokemon/${id}` );
    setPokemon( respData.data );
    
    const images = respData.data.sprites.other;
    const { "official-artwork": officialArtwork } = images;
    setSourceImage( officialArtwork.front_default );

    const experience = respData.data;
    const { base_experience, height, order, weight } = experience;
    
    setBase( base_experience );
    setHeight( height / 10 );
    setOrder( order );
    setWeight( weight / 10 );
 
    const reference = respData.data;
    const { moves: [{move:{name}}] } = reference;
    setMove( name );
  };

  const information = async() => {
    const respData = await axios.get(`${API_POKEMON}/ability/${id}/`);
    setType(respData);

    const effecty = respData.data;
    const {flavor_text_entries: [{flavor_text}]} = effecty
    setEffecty(flavor_text); 

    const generat = respData.data.generation.name;
    setGenerations(generat);

    const descrip = respData.data.effect_entries[1].effect;
    setDescription(descrip); 
  }
 
  useEffect(() => {
    getPokemonDetail();
    information();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10">
        <div className="bg-white flex flex-col justify-center">
          <div className="max-w-[400px] w-full mx-auto bg-gray-900 rounded-md shadow-2xl
              shadow-emerald-500/50">
            <h1>{ pokemon?.name }</h1>
            <img
              className="py-6 w-full mx-auto static"
              src={ sourceImage }
              alt=""
            />
            <div className="px-5 pb-5">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="text-white bg-green-500 hover:bg-green-600 focus:ring-4
                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                    py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-8 py-12  bg-green-200  bg-gradient-to-r from-white rounded-xl">
          <div className="mt-10 ml-8 w-full mx-auto">
            <h1 className="text-5xl text-green-800 mb-8 font-bold capitalize">
              { pokemon?.name }
            </h1>
            <p className="font-sans text-xl">
              Level of Experience:{" "}
              <span className="text-green-800 ">
                { base } Level
              </span>
            </p>
            <p className="font-sans text-xl">
              Height:{" "}
              <span className="text-green-800">
                { height } m
              </span>
            </p>
            <p className="font-sans text-xl">
              Number of Pokemon:{" "}
              <span className="text-green-800">
                # { order }
              </span>
            </p>
            <p className="font-sans text-xl">
              Weight:{" "}
              <span className="text-green-800 ">
                { weight } k
              </span>
            </p>
            <p className="font-sans text-xl">
              Move:{" "}
              <span className="text-green-800">
                { move } 
              </span>
            </p>
            <p className="font-sans text-xl">
              Effect:{" "}
              <span className="text-green-800">
                { effecty } 
              </span>
            </p>
            <p className="font-sans text-xl">
              Generation:{" "}
              <span className="text-green-800">
                { generatons } 
              </span>
            </p>
            <p className="font-sans text-xl px-10">
              Description:{" "} <br />
              <span className="text-green-800">
                { description } 
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
