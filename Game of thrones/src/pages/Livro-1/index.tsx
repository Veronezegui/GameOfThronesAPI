import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import book from '../../assets/images/book.jpg';
import { Header, Main, Menu, Card, Footer } from './styles';

const Livro1: React.FC = () => {
  return (
    <Main>
      <Header>
        <h1>A Game of Thrones</h1>
        <a href="/Livros">
          <BiArrowBack />
        </a>
      </Header>
      <Menu>
        <Card>
          <img src={book} alt="tully" />
          <div>
            <p>Name: A Game of Thrones</p>
            <p>Isbn: 978-0553103540</p>
            <p>Authors: George R. R. Martin</p>
            <p>NumberOfPages: 694</p>
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
