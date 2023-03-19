import axios from 'axios'
import userData from '../../users_data.json'

export const API_POKEMON = 'https://pokeapi.co/api/v2'

export const getPokemons = async() => {
  return await axios.get(`${ API_POKEMON }/pokemon/?limit=1000`)
}
