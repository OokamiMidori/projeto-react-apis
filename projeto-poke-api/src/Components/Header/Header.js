import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container, ExcluirDaPokedexButton, PokedexButton } from "./Header.styled";
import pokelogo from "../../assets/image 1pokemon.svg"
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../../constants/url"


function Header() {

  const context = useContext(GlobalContext)
  const { removeFromPokedex, addToPokedex, pokedex} = context
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

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

  const estaNaLista = pokedex.find(
    (pokemonInList) => pokemonInList.name === pokemon.name)
  

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
          <div></div>
          <img src={pokelogo} alt="logo"/>
            <PokedexButton onClick={() => goToPokedexPage(navigate)}>
              Ver pokedex
            </PokedexButton>
            {/* <span>Lista de pokemons</span> */}
          </>
        );
      case "/pokedex":
        return (
          <>
          <div onClick={() => goToHomePage(navigate)}>{"<"} Todos os pokemons</div>
          <img src={pokelogo} alt="logo"/>
         <div></div>

            {/* <span>Pokedex</span> */}
          </>
        );
        case `/pokemon/${id}`:
        return (
          <>
          <div onClick={() => goToHomePage(navigate)}>{"<"} Todos os pokemons</div>
          <img src={pokelogo} alt="logo"/>
          {estaNaLista ? (
              <ExcluirDaPokedexButton onClick={() => removeFromPokedex(pokemon)}>
              Remover da Pokedex
            </ExcluirDaPokedexButton>
         
        ) : (
          <PokedexButton onClick={() => addToPokedex(pokemon)}>
          Adicionar à Pokedex
        </PokedexButton>
        )}
        

            {/* <span>Pokedex</span> */}
          </>
        );
      default:
        return (
          <>
          <div onClick={() => goToHomePage(navigate)}>{"<"} Todos os pokemons</div>
            <button >
              Voltar para página inicial
            </button>
            <span>Página inexistente</span>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
