import { useState } from "react";
import Tela1 from "./Tela1";
import Tela2 from "./Tela2";
import "./App.css";

function App() {
  const [tela, setTela] = useState(1);

  return tela === 1 ? (
    <Tela1 irParaTela2={() => setTela(2)} />
  ) : (
    <Tela2 voltarParaTela1={() => setTela(1)} />
  );
}

export default App;
