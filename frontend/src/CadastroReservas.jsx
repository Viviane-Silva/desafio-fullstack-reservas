import { useState, useEffect } from "react";
import api from "./api";

function CadastroReservas({ voltarParaListaReservas }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [periodo, setPeriodo] = useState("manha");
  const [ambientes, setAmbientes] = useState([]);
  const [ambiente, setAmbiente] = useState("");
  const [sucesso, setSucesso] = useState(false);

  // Buscar ambientes do backend
  useEffect(() => {
    api
      .get("/ambientes/")
      .then((res) => setAmbientes(res.data))
      .catch((err) => {
        console.error("Erro ao carregar estações", err);
        alert("Não foi possível carregar as estações.");
      });
  }, []);

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
        ambiente,
      })
      .then(() => {
        setSucesso(true);
        setNome("");
        setEmail("");
        setData("");
        setHorario("");
        setPeriodo("manha");
        setAmbiente("");
      })
      .catch((err) => {
        alert(
          err.response?.data?.non_field_errors?.[0] ||
            "Erro ao criar reserva! Esta estação já está reservada para esse período e data."
        );
      });
  };

  if (sucesso) {
    return (
      <div className="container">
        <h1 className="title">Reserva realizada com sucesso! 🎉</h1>
        <div className="button-container">
          <button className="button" onClick={voltarParaListaReservas}>
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
              value="Manha"
              checked={periodo === "Manha"}
              onChange={(e) => setPeriodo(e.target.value)}
            />{" "}
            Manhã
          </label>
          <label>
            <input
              type="radio"
              value="Tarde"
              checked={periodo === "Tarde"}
              onChange={(e) => setPeriodo(e.target.value)}
            />{" "}
            Tarde
          </label>
          <label>
            <input
              type="radio"
              value="Noite"
              checked={periodo === "Noite"}
              onChange={(e) => setPeriodo(e.target.value)}
            />{" "}
            Noite
          </label>
        </div>

        <div>
          <label>Ambiente:</label>
          <select
            value={ambiente}
            onChange={(e) => setAmbiente(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {ambientes.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nome}
              </option>
            ))}
          </select>
        </div>

        <button className="button" type="submit">
          Reservar
        </button>
        <button
          className="button"
          type="button"
          onClick={voltarParaListaReservas}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default CadastroReservas;
