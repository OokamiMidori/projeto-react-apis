import Card from "../../Components/Card/Card";
import { Container, TitleContainer } from "./HomePage.styled";
import Header from "../../Components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";

function HomePage() {
  // const { pokelist, addToPokedex, pokedex } = props;
  const context = useContext(GlobalContext)
  const { pokelist, addToPokedex, pokedex } = context

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
        <TitleContainer>Todos os Pokémons</TitleContainer>      
      <section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
