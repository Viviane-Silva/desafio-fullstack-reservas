import { useEffect, useState } from "react";
import api from "./api";

function ListaReservas({ irParaCadastroReservas }) {
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
        <button className="button" onClick={irParaCadastroReservas}>
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
              <th>Reservado</th>
              <th>Até</th>
              <th>Período</th>
              <th>Ambiente</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((r) => (
              <tr key={r.id}>
                <td>{r.nome}</td>
                <td>{r.email}</td>
                <td>{r.data_reserva}</td>
                <td>{r.horario_inicio}</td>
                <td>{r.horario_fim}</td>
                <td>{r.periodo}</td>
                <td>{r.ambiente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaReservas;
