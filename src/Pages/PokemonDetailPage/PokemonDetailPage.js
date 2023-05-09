import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { TitleContainer } from '../HomePage/HomePage.styled'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { BaseStatusContainer, ContainerCantoDireito, ContainerStatusContainer, DetailContainer, DetailContainerCard, MovesContainer, Pokeball, Pokemon8bits, PokemonType, Progress, ProgressBar, StatusContainer, TypesContainer } from './PokemonDetailStyle';
import { getColors } from '../../utils/returncardcolor';
import { Pokemon, PokemonName, PokemonNumber } from '../../Components/Card/Card.styled';
import { getTypes } from '../../utils/returnpokemontype';
import pokeball from "../../assets/pngwing 2pokeballdetail.svg"
import { GlobalContext } from '../../contexts/GlobalContexts';
import Modal from '../../Components/Modal/Modal';


function PokemonDetailPage() {
const context = useContext(GlobalContext)

const {modal} = context
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0)
  const [defense, setDefense] = useState(0)
  const [spAttack, setSpAttack] = useState(0)
  const [spDefense, setSpDefense] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [move1, setMove1] = useState("")
  const [move2, setMove2] = useState("")
  const [move3, setMove3] = useState("")
  const [move4, setMove4] = useState("")

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}/`);
      setPokemon(response.data);
      setHp(response.data.stats[0].base_stat)
      setAttack(response.data.stats[1].base_stat)
      setDefense(response.data.stats[2].base_stat)
      setSpAttack(response.data.stats[3].base_stat)
      setSpDefense(response.data.stats[4].base_stat)
      setSpeed(response.data.stats[5].base_stat)
      setMove1(response.data.moves[0].move.name)
      setMove2(response.data.moves[1].move.name)
      setMove3(response.data.moves[2].move.name)
      setMove4(response.data.moves[3].move.name)
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };


  const total = hp + attack + defense + spAttack + spDefense + speed

  console.log(pokemon)
  return (
    <DetailContainer>
       {modal? <Modal/>:null}      
      <Header />
      <TitleContainer>Detalhes</TitleContainer>
      <DetailContainerCard color={getColors(pokemon.types && pokemon.types[0].type.name)}>
        <Pokemon8bits>
          <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
          </div>
          <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`} alt={pokemon.name} />
          </div>
        </Pokemon8bits>
        <BaseStatusContainer>
          <h1>Base status</h1>

          <ContainerStatusContainer>
            <StatusContainer>
              <p>Hp</p>
              <p>{hp}</p>
              <ProgressBar>
                <Progress value={hp} />
              </ProgressBar>
            </StatusContainer>

            <StatusContainer>
              <p>Attack</p>
              <p>{attack}</p>
              <ProgressBar>
                <Progress value={attack} />
              </ProgressBar>
            </StatusContainer>

            <StatusContainer>
              <p>Defense</p>
              <p> {defense}</p>
              <ProgressBar>
                <Progress value={defense} />
              </ProgressBar>
            </StatusContainer>

            <StatusContainer>
              <p>Sp.Atk</p>
              <p>{spAttack}</p>
              <ProgressBar>
                <Progress value={spAttack} />
              </ProgressBar>
            </StatusContainer>

            <StatusContainer>
              <p>Sp.Def</p>
              <p>{spDefense}</p>
              <ProgressBar>
                <Progress value={spDefense} />
              </ProgressBar>
            </StatusContainer>

            <StatusContainer>
              <p>Speed</p>
              <p> {speed}</p>
              <ProgressBar>
                <Progress value={speed} />
              </ProgressBar>
            </StatusContainer>

            <StatusContainer>
              <p>Total</p>
              <p> {total}</p>
            </StatusContainer>
          </ContainerStatusContainer>


        </BaseStatusContainer>
        <ContainerCantoDireito>
           <div>
          <PokemonNumber>#0{pokemon.id}</PokemonNumber>
          <PokemonName>{pokemon.name}</PokemonName>
          <TypesContainer>
            {pokemon.types?.map((type, index) => {
              return <PokemonType key={index} src={getTypes(type.type.name)} alt='' />
            })}
          </TypesContainer>
        </div>
        <MovesContainer>
          <div>
            <h1>Moves:</h1>
          <p>{move1}</p>
          <p>{move2}</p>
          <p>{move3}</p>
          <p>{move4}</p>
          </div>
          
        </MovesContainer>
        </ContainerCantoDireito>
       
        <Pokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
        <Pokeball src={pokeball} alt="pokeball" />
      </DetailContainerCard>


    </DetailContainer>
  )
}

export default PokemonDetailPage