import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { goToDetailsPage } from "../../routes/coordinator";
import { getColors } from "../../utils/returncardcolor";
import { CatchButton, Container, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from "./Card.styled";
import pokeball from "../../assets/pngwing 2.png"
import {getTypes} from "../../utils/returnpokemontype"

function Card(props) {
  const { pokemonUrl} = props;
  const context = useContext(GlobalContext)
  const { addToPokedex, removeFromPokedex} = context

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };
  


 


  return (
    <Container color={getColors(pokemon.types && pokemon.types[0].type.name)}>
    <div>
      <PokemonNumber>#0{pokemon.id}</PokemonNumber>
      <PokemonName>{pokemon.name}</PokemonName>
      <TypesContainer>
          {pokemon.types?.map((type, index) => {
              return <PokemonType key={index} src={getTypes(type.type.name)} alt='' />
          })}
      </TypesContainer>
      <p onClick={() => goToDetailsPage(navigate, pokemon.id)}>Detalhes</p>
    </div>
    <div>
      <Pokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
     
      {location.pathname === "/" ? (
          <CatchButton onClick={() => addToPokedex(pokemon)}>
            Adicionar à Pokedex
          </CatchButton>
        ) : (
          <CatchButton onClick={() => removeFromPokedex(pokemon)}>
            Remover da Pokedex
          </CatchButton>
        )}
      
    </div>
    <Pokeball src={pokeball} alt="pokeball" />
  </Container>
  );
}

export default Card;
