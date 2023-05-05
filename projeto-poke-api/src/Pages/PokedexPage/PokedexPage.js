import Card from "../../Components/Card/Card";
import { Container } from "./PokedexPage.styled";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { TitleContainer } from "../HomePage/HomePage.styled";

function PokedexPage() {
  // const { pokedex, removeFromPokedex } = props;
  const context = useContext(GlobalContext)
  const {pokedex, removeFromPokedex} = context

  return (
    <Container>
      <Header />
      <TitleContainer>Meus Pokémons</TitleContainer>
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
