/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import { BiArrowBack } from 'react-icons/bi';
import api from '../../services/api';
import { Header, Main, Menu, Card, Footer } from './styles';
import { RouteComponentProps } from 'react-router-dom';

interface Conteudo {
  id:string;
}

interface ConteudoBook {
  name: string;
  authors: string[];
  numberOfPages: number;
  publiser: string;
  country: string;
  released: Date;
}

const Livro1: React.FC<RouteComponentProps<Conteudo>> = props => {
    const { match } = props;
    const { id } = match.params;

    const [BooksAtuais, SetBooksAtuais] = useState<ConteudoBook>(
      {} as ConteudoBook,
    )

    async function CarregaBooks(id:string) {
      const data = await api.get(`https://www.anapioficeandfire.com/api/books/${id}`).then(response => response.data);
      SetBooksAtuais(data);
    }

    useEffect(() => {
      CarregaBooks(id);
    }, [id]);
  return (
    <Main>
      <Header>
        <h1>{BooksAtuais.name}</h1>
        <a href="/Livros">
          <BiArrowBack />
        </a>
      </Header>
      <Menu>
        <Card>
          <div>
            <p>name: {BooksAtuais.name}</p>
            <p>authors: {BooksAtuais.authors}</p>
            <p>numberOfPages: {BooksAtuais.numberOfPages}</p>
            <p>publiser: {BooksAtuais.publiser}</p>
            <p>country: {BooksAtuais.country}</p>
            <p>released: {BooksAtuais.released}</p>
          </div>
        </Card>
      </Menu>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Main>
  );
};

export default Livro1;
