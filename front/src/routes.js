import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Autentica from "./pages/Autentica";

import Cadastro from "./pages/Cadastro";

import PaginaInicial from "./pages/PaginaInicial/";

import Comercio from "./pages/Comercio";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("Usuario/token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Autentica} />
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Comercio" component={Comercio} />
        <PrivateRoute path="/PaginaInicial" component={PaginaInicial} />
      </Switch>
    </BrowserRouter>
  );
}
