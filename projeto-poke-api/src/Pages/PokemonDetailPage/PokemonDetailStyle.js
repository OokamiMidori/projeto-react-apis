import styled from "styled-components";

export const DetailContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
h1{
    align-self: flex-start;
}
`

export const DetailContainerCard = styled.div`
  padding: 16px;
  width: 95vw;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 20px 10px;
  color: #ffffff;
  height: 80vh;
  justify-content: space-between;
`;


export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const Pokemon8bits = styled.div`
display: flex;
flex-direction: column;
height: 100%;
align-items: center;
justify-content: space-around;
img{
  height: 100%;
}
div{
  height: 40%;
  width: auto;
  background-color: white;
  border-radius: 8px;
  border: 2px solid #fff;
}
`
export const BaseStatusContainer = styled.div`
height: 100%;
background-color: white;
width: 20vw;
padding: 20px;
border-radius: 12px;
h1{
  color: black;
  font-size: 24px;
}
div{ 
  color: black;
}
`
export const ProgressBar = styled.div`
  height: 10px;
 
  border-radius: 5px;
  width: 100%;
`;

export const Progress = styled.div`
  height: 10px;
  border-radius: 5px;
  background-color: ${props => getColor(props.value)};
  width: ${props => props.value}%;
`;
function getColor(value) {
  const colors = [
    'orange',
    '#fdd835',
    'green'
  ];

  const colorIndex = Math.floor(value / 49); // calcula o índice da cor com base no valor
  return colors[colorIndex];
}

export const StatusContainer = styled.div`
display:grid;
grid-template-columns:20% 20% 60%;
width: 100%;
border-bottom: 1px solid lightgray;
border-top: 1px solid lightgray;
p{
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #5d6266;
}
p:first-of-type{
display: flex;
justify-content: end;
font-weight: 100;
}

div{
  display: flex;
  justify-content: start;
  padding-top: 5px;
}
`
export const ContainerStatusContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
`

export const ContainerCantoDireito = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-right: 250px;
`

export const MovesContainer = styled.div`
height: 100%;
background-color: white;
width: 25vw;
padding: 20px;
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;
h1{
  color: black;
  font-size: 24px;
}
p{ 
  color: black;
  background-color: #ECECEC;
  border:1px dashed rgba(0,0,0,0.14);
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 10px;
  gap: 10px;
  min-width: 10%;  
}
div{
  display: flex;
  flex-direction: column;
  gap: 5%;
  height: 100%;
}
`