import { useEffect, useState } from "react";
import api from "./api";

function Tela1({ irParaTela2 }) {
  const [reservas, setReservas] = useState([]);

  const fetchReservas = () => {
    api
      .get("/reservas/")
      .then((res) => setReservas(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  return (
    <div className="container">
      <div className="logo-container">
        <img src="./public/logo.png" alt="Logo" className="logo" />
      </div>
      <h1 className="title">Reservas Existentes</h1>

      <div className="button-container">
        <button className="button" onClick={irParaTela2}>
          Fazer Reserva
        </button>
      </div>

      <div className="tabela-wrapper">
        <table className="tabela-reservas">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Período</th>
              <th>Estação</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((r) => (
              <tr key={r.id}>
                <td>{r.nome}</td>
                <td>{r.email}</td>
                <td>{r.data_reserva}</td>
                <td>{r.horario}</td>
                <td>{r.periodo}</td>
                <td>{r.estacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tela1;
