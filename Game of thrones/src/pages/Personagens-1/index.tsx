/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import { BiArrowBack } from 'react-icons/bi';
import jon from '../../assets/images/jon.jpg';
import api from '../../services/api';
import { RouteComponentProps } from 'react-router-dom';

import { Main, Header, Menu, Card, Footer } from './styles';

interface Conteudo {
  id:string;
}

interface ConteudoPersonagem {
  name: string;
  gender: string;
  culture: string;
  born: string;
  titles: string[];
  aliases: string[];

}

const Jon: React.FC<RouteComponentProps<Conteudo>> = props => {
  const { match } = props;
  const { id } = match.params;

  const [CharactersAtuais, SetCharactersAtuais] = useState<ConteudoPersonagem>(
    {} as ConteudoPersonagem,
  )

  async function CarregaPersonagens(id:string) {
    const data = await api.get(`https://www.anapioficeandfire.com/api/characters/${id}`).then(response => response.data);
    SetCharactersAtuais(data);
  }

  useEffect(() => {
    CarregaPersonagens(id);
  }, [id]);
  return (
    <Main>
      <Header>
        <h1>{CharactersAtuais.name}</h1>
        <a href="/Personagens">
          <BiArrowBack>Home</BiArrowBack>
        </a>
      </Header>
      <Menu>
        {
          CharactersAtuais.name !== undefined
          ?
            <Card>
              <div>
                <p>name: {CharactersAtuais.name}</p>
                <p>gender: {CharactersAtuais.gender}</p>
                <p>culture: {CharactersAtuais.culture}</p>
                <p>born: {CharactersAtuais.born}</p>
                <p>titles: {CharactersAtuais.titles}</p>
                <p>
                  aliases: {CharactersAtuais.aliases}
                </p>
              </div>
            </Card>
          :
          "Carregando Personagens"
        }
      </Menu>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Main>
  );
};

export default Jon;
