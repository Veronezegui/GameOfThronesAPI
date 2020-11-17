import React from 'react';
import { Header, Main, Menu, Footer } from './styles';
import books from '../../assets/images/books.jpg';
import personagens from '../../assets/images/personagens.jpg';
import houses from '../../assets/images/houses.jpg';
import logo from '../../assets/images/logo.png';

const Home: React.FC = () => {
  return (
    <Main>
      <Header>
        <img
          src="https://i.pinimg.com/originals/d4/97/ce/d497ce2e25cbe57c7360cc29b7f56d49.gif"
          alt="header"
        />
        <section>
          <img src={logo} alt="logo" />
          <h3>Encyclopedia</h3>
        </section>
      </Header>
      <Menu>
        <section>
          <img src={personagens} alt="personagens" />
          <a href="/Personagens" className="P1">
            Personagens
          </a>
        </section>
        <section>
          <img src={houses} alt="casas" />
          <a href="/Casas" className="P2">
            Casas
          </a>
        </section>
        <section>
          <img src={books} alt="livros" />
          <a href="/Livros" className="P3">
            Livros
          </a>
        </section>
      </Menu>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Main>
  );
};

export default Home;
