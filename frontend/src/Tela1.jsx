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
      <h1 className="title">Reservas Existentes</h1>
      <div className="button-container">
        <button className="button" onClick={irParaTela2}>
          Fazer Reserva
        </button>
      </div>

      <ul className="list">
        {reservas.map((r) => (
          <li key={r.id} className="list-item">
            {r.nome} - {r.email} - {r.data_reserva} {r.horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tela1;
