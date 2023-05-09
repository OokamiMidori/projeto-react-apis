import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  height: 160px;
  font-size: 24px;
  font-weight: 700;
  background-color: #FFFFFF;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

 

  div{
    width:20vw;
    cursor: pointer;
    font-style: normal;
    font-size: 24px;
    line-height: 36px;
    text-decoration-line: underline;
    color: #1a1a1a;
  }
`;

export const PokedexButton = styled.button`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
border: none;


width: 220px;
height: 62px;


background: #33A4F5;
border-radius: 8px;
`

export const ExcluirDaPokedexButton = styled.button`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
border: none;
width: 226px;
height: 57px;


background: #FF6262;
border-radius: 8px;
`
