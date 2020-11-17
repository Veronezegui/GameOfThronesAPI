import React, {useState,useEffect} from 'react';
import { BiArrowBack, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import api from '../../services/api';
import { Header, Main, Menu, Card, Footer, Navegação } from './styles';

interface HousesData {
  url:string;
  name:string;
}

  const Casas: React.FC = () => {
    const [PaginaAtual, SetPaginaAtual] = useState(1);
    const [CasasAtuais, SetCasasAtuais] = useState<HousesData[]>(
      [] as HousesData[],
    )

    function next() {
      SetPaginaAtual(PaginaAtual + 1)
    }

    function back() {
      SetPaginaAtual(PaginaAtual - 1)
    }

    async function CarregaCasas(page = 1) {
      const casas = await api.get(`houses?page=${page <= 0 ? 1:page}`)
        .then(response => response.data);
      SetCasasAtuais(casas);
      console.log(casas);
    }

    useEffect(() => {
      CarregaCasas(PaginaAtual);

    }, [PaginaAtual]);
  return (
    <Main>
      <Header>
        <h1>Houses</h1>
        <a href="/">
          <BiArrowBack>Home</BiArrowBack>
        </a>
      </Header>
      <Navegação>
        <BiLeftArrowAlt onClick={back} />
        <span>{`Page ${PaginaAtual <= 0 ? 1:PaginaAtual}`}</span>
        <BiRightArrowAlt onClick={next}/>
      </Navegação>
      <Menu>
      {
          CasasAtuais.map((casas, index) => {
            return (
              <Card key={index}>
                <span>{casas.name}</span>
                <a href={`/DetalhesCasas/${PaginaAtual >= 2 ? (PaginaAtual * 10) - 10 + index + 1 : index + 1}`}> + More</a>
              </Card>
            )
          })
        }
      </Menu>
      <Footer>
        <p>All rights reserved.</p>
      </Footer>
    </Main>
  );
};

export default Casas;
