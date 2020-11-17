import React, { useState,useEffect } from 'react';
import { BiArrowBack, BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import api from '../../services/api';
import { Main, Header, Menu, Card, Footer, Navegação } from './styles';

import book from '../../assets/images/book.jpg';

interface BookData {
  url:string;
  name:string;
}

const Livros: React.FC = () => {
  const [PaginaAtual, SetPaginaAtual] = useState(1);
  const [BooksAtuais, SetBooksAtuais] = useState<BookData[]>(
    [] as BookData[],
  )

  function next() {
    SetPaginaAtual(PaginaAtual + 1)
  }

  function back() {
    SetPaginaAtual(PaginaAtual - 1)
  }

  async function CarregaBooks(page = 1) {
    const books = await api.get(`books?page=${page <= 0 ? 1:page}`)
      .then(response => response.data);
    SetBooksAtuais(books)
    console.log(books)
  }

  useEffect(() => {
    CarregaBooks(PaginaAtual);

  }, [PaginaAtual]);

  return (
    <Main>
      <Header>
        <h1>Books</h1>
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
          BooksAtuais.map((book, index) => {
            return (
              <Card key={index}>
                <span>{book.name}</span>
                <a href={`/DetalhesLivros/${PaginaAtual >= 2 ? (PaginaAtual * 10) - 10 + index + 1 : index + 1}`}> + More</a>
              </Card>
            )
          })
        }
      </Menu>
      <Footer>
        <p>Todos os direitos reservados</p>
      </Footer>
    </Main>
  );
};

export default Livros;
