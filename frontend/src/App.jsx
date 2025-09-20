import { useEffect, useState } from "react";
import api from "./api";
import "./App.css";

function App() {
  const [reservas, setReservas] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  const fetchReservas = () => {
    api
      .get("/reservas/")
      .then((res) => setReservas(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchReservas();
  }, []);
  // POST → criar nova reserva
  const botaoEnviar = (e) => {
    e.preventDefault();
    api
      .post("/reservas/", { nome, email, data_reserva: data, horario })
      .then(() => {
        fetchReservas();
        setNome("");
        setEmail("");
        setData("");
        setHorario("");
      })
      .catch((err) => console.error(err));
  };

  // DELETE → remover reserva
  const botaoDeleta = (id) => {
    api
      .delete(`/reservas/${id}/`)
      .then(fetchReservas)
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h1 className="title">Sistema de Reservas</h1>

      <form onSubmit={botaoEnviar}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <input
          type="time"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />
        <button type="submit">Criar</button>
      </form>

      <h2 className="subtitle">Reservas Atuais</h2>
      <ul className="list">
        {reservas.map((r) => (
          <li key={r.id} className="list-item">
            <span>
              {r.nome} - {r.email} - {r.data_reserva} {r.horario}
            </span>
            <button className="delete-button" onClick={() => botaoDeleta(r.id)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
