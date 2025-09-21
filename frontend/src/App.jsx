import { useState } from "react";
import "./App.css";
import ListaReservas from "./ListaReservas";
import CadastroReservas from "./CadastroReservas";

function App() {
  const [tela, setTela] = useState(1);

  return tela === 1 ? (
    <ListaReservas irParaCadastroReservas={() => setTela(2)} />
  ) : (
    <CadastroReservas voltarParaListaReservas={() => setTela(1)} />
  );
}

export default App;
