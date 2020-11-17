import React, {useState, FormEvent} from 'react';
import api from '../../services/api';
import { BiArrowBack } from 'react-icons/bi';
import { Main, Header, Menu, Card, Footer, Form } from './styles';

import book from '../../assets/images/book.jpg';

const Livros: React.FC = () => {

  return (
    <Main>
      <Header>
        <h1>Livros</h1>
        <a href="/">
          <BiArrowBack>Home</BiArrowBack>
        </a>
      </Header>
      <Menu>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
        <Card>
          <img src={book} alt="jon snow" />
          <a href="/Livro1"> + Informações</a>
        </Card>
      </Menu>
      <Footer>
        <p>Todos os direitos reservados</p>
      </Footer>
    </Main>
  );
};

export default Livros;
