import { useState } from "react";
import api from "./api";

function Tela2({ voltarParaTela1 }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [periodo, setPeriodo] = useState("manha");
  const [estacao, setEstacao] = useState("");
  const [sucesso, setSucesso] = useState(false);

  // Mock das estações (substituir por GET do backend depois)
  const estacoes = ["Estação A", "Estação B", "Estação C"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const horarioFormatado =
      horario.includes(":") && horario.split(":").length === 2
        ? horario + ":00"
        : horario;

    api
      .post("/reservas/", {
        nome,
        email,
        data_reserva: data,
        horario: horarioFormatado,
        periodo,
        estacao,
      })
      .then(() => {
        setSucesso(true);
        setNome("");
        setEmail("");
        setData("");
        setHorario("");
        setPeriodo("manha");
        setEstacao("");
      })
      .catch((err) => {
        console.error(err.response?.data || err);
        alert("Erro ao criar reserva!");
      });
  };

  if (sucesso) {
    return (
      <div className="container">
        <h1 className="title">Reserva realizada com sucesso! 🎉</h1>
        <div className="button-container">
          <button className="button" onClick={voltarParaTela1}>
            Voltar para lista
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="logo-container">
        <img src="./public/logo.png" alt="Logo" className="logo" />
      </div>
      <h1 className="title">Nova Reserva</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <input
          className="input"
          type="time"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />

        <div>
          <label>Período:</label>
          <label>
            <input
              type="radio"
              value="manha"
              checked={periodo === "manha"}
              onChange={(e) => setPeriodo(e.target.value)}
            />{" "}
            Manhã
          </label>
          <label>
            <input
              type="radio"
              value="tarde"
              checked={periodo === "tarde"}
              onChange={(e) => setPeriodo(e.target.value)}
            />{" "}
            Tarde
          </label>
          <label>
            <input
              type="radio"
              value="noite"
              checked={periodo === "noite"}
              onChange={(e) => setPeriodo(e.target.value)}
            />{" "}
            Noite
          </label>
        </div>

        <div>
          <label>Estação:</label>
          <select
            value={estacao}
            onChange={(e) => setEstacao(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {estacoes.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <button className="button" type="submit">
          Reservar
        </button>
        <button className="button" type="button" onClick={voltarParaTela1}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default Tela2;
