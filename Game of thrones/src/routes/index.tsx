import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Personagens from '../pages/Personagens';
import Casas from '../pages/Casas';
import Livros from '../pages/Livros';
import Jon from '../pages/Personagens-1';
import Casa1 from '../pages/Casa-1';
import Livro1 from '../pages/Livro-1';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Personagens" exact component={Personagens} />
    <Route path="/Casas" exact component={Casas} />
    <Route path="/Livros" exact component={Livros} />
    <Route path="/DetalhesPersonagem/:id" exact component={Jon} />
    <Route path="/DetalhesCasas/:id" exact component={Casa1} />
    <Route path="/Livro1" exact component={Livro1} />
  </Switch>
);

export default Routes;
