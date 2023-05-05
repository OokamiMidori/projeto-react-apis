import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import { TitleContainer } from '../HomePage/HomePage.styled'
import { useParams } from 'react-router-dom';
import axios from 'axios';



function PokemonDetailPage() {

  const {id} = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}/`);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };
  return (
    <div>
  <Header/>
  <TitleContainer>Detalhes</TitleContainer>      
    </div>
  )
}

export default PokemonDetailPage