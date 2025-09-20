import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [reservas, setRseservas] = useState([]);

  useEffect(() => {
    api
      .get("/reservas/")
      .then((res) => setReservas(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Reservas</h1>
      <ul>
        {reservas.map((r) => (
          <li key={r.id}>
            {r.nome} - {r.data_reserva} {r.horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
