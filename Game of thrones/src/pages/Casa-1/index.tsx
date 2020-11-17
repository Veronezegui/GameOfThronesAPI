/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import { BiArrowBack } from 'react-icons/bi';
import tully from '../../assets/images/tully.jpg';
import api from '../../services/api';
import { Header, Main, Menu, Card, Footer } from './styles';
import { RouteComponentProps } from 'react-router-dom';

interface Conteudo {
  id:string;
}

interface ConteudoCasa {
  name: string;
  region: string;
  words: string;
  titles: string[];
  currentLord: string;
  seats: string[];
  ancestralWeapons: string[];
}

const Casa1: React.FC<RouteComponentProps<Conteudo>> = props => {
    const { match } = props;
    const { id } = match.params;

    const [CasasAtuais, SetCasasAtuais] = useState<ConteudoCasa>(
      {} as ConteudoCasa,
    )

    async function CarregaCasas(id:string) {
      const data = await api.get(`https://www.anapioficeandfire.com/api/houses/${id}`).then(response => response.data);
      SetCasasAtuais(data);
    }

    useEffect(() => {
      CarregaCasas(id);
    }, [id]);
  return (
    <Main>
      <Header>
        <h1>{CasasAtuais.name}</h1>
        <a href="/Casas">
          <BiArrowBack />
        </a>
      </Header>
      <Menu>
        {
            CasasAtuais.name !== undefined
            ?
              <Card>
               <div>
                  <p>Name: {CasasAtuais.name}</p>
                  <p>Region: {CasasAtuais.region}</p>
                  <p>words: {CasasAtuais.words}</p>
                  <p>titles: {CasasAtuais.titles}</p>
                  <p>seats: {CasasAtuais.seats}</p>
                  <p>current Lord: {CasasAtuais.currentLord}</p>
                  <p>ancestralWeapons: {CasasAtuais.ancestralWeapons}</p>
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

export default Casa1;
