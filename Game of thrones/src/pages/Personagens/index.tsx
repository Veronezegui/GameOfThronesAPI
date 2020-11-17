import React, { useState, FormEvent, useEffect } from 'react';
import { BiArrowBack, BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import api from '../../services/api';
import { Main, Header, Menu, Card, Footer, Navegação } from './styles';

import jon from '../../assets/images/jon.jpg';

interface CharacterData {
  url:string;
  name:string;
}

const Personagens: React.FC = () => {
  const [PaginaAtual, SetPaginaAtual] = useState(1);
  const [CharactersAtuais, SetCharactersAtuais] = useState<CharacterData[]>(
    [] as CharacterData[],
  )

  function next() {
    SetPaginaAtual(PaginaAtual + 1)
  }

  function back() {
    SetPaginaAtual(PaginaAtual - 1)
  }

  async function CarregaPersonagens(page = 1) {
    const characters = await api.get(`characters?page=${page <= 0 ? 1:page}`)
      .then(response => response.data);
    SetCharactersAtuais(characters)
    console.log(characters)
  }

  useEffect(() => {
    CarregaPersonagens(PaginaAtual);

  }, [PaginaAtual]);

  return (
    <Main>
      <Header>
        <h1>Personagens</h1>
        <a href="/">
          <BiArrowBack>Home</BiArrowBack>
        </a>
      </Header>
      <Navegação>
        <BiLeftArrowAlt onClick={back} />
        <span>{`Página ${PaginaAtual <= 0 ? 1:PaginaAtual}`}</span>
        <BiRightArrowAlt onClick={next}/>
      </Navegação>
      <Menu>
        {
          CharactersAtuais.map((personagem, index) => {
            return (
              <Card key={index}>
                <img src={jon} alt="jon snow"/>
                <span>{personagem.name}</span>
                <a href={`/DetalhesPersonagem/${PaginaAtual >= 2 ? (PaginaAtual * 10) - 10 + index + 1 : index + 1}`}> + Informações</a>
              </Card>
            )
          })
        }
      </Menu>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Main>
  );
};

export default Personagens;
