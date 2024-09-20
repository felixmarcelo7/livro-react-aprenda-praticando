const Header = () => {
  return React.createElement(
    "header",
    { class: "topo" },
    React.createElement("h1", { className: "logo" }, "Editora MaujorTec")
  );
}

const Principal = () => {
  return React.createElement(
    "div",
    { className: "principal" },
    "Coluna principal"
  );
}

const Navegacao = () => {
  return React.createElement(
    "div",
    { className: "navegacao" },
    "Coluna de navegação"
  );
}

const Topo = () => {
  return React.createElement(
    "div",
    { className: "c-topo" },
    Header(),
    Navegacao()
  );
}

const Rodape = () => {
  return React.createElement(
    "footer",
    { className: "rodape" },
    React.createElement("p", {}, "Rodapé")
  );
}

const App = () => {
  return React.createElement(React.Fragment, {}, Topo(), Principal(), Rodape());
}

ReactDOM.render(App(), document.getElementById("tudo"));

