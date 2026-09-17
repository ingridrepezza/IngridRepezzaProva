import { useState } from "react"
import type { Agendamento } from "../types/Agendamento"

interface FormulariosAgendamentoProps {
  onAdicionar: (agendamento: Agendamento) => void
}

function FormulariosAgendamentos({
  onAdicionar,
}: FormulariosAgendamentoProps) {
  const [quadra, setQuadra] = useState("")
  const [piso, setPiso] = useState("")
  const [modalidade, setModalidade] = useState("")
  const [data, setData] = useState("")
  const [horario, setHorario] = useState("")
  const [duracao, setDuracao] = useState("")

  const formularioValido =
    quadra !== "" &&
    piso !== "" &&
    modalidade !== "" &&
    data !== "" &&
    horario !== "" &&
    duracao !== ""

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const novoAgendamento: Agendamento = {
      id: Date.now(),
      quadra,
      piso,
      modalidade,
      data,
      horario,
      duracao: Number(duracao),
      status: "Pendente",
    }

    onAdicionar(novoAgendamento)

    setQuadra("")
    setPiso("")
    setModalidade("")
    setData("")
    setHorario("")
    setDuracao("")
  }

  return (
    <section>
      <h2>Novo Agendamento</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Quadra
          <select
            value={quadra}
            onChange={(event) => setQuadra(event.target.value)}
          >
            <option value="">Selecione a quadra</option>
            <option value="Quadra 1">Quadra 1</option>
            <option value="Quadra 2">Quadra 2</option>
            <option value="Quadra 3">Quadra 3</option>
          </select>
        </label>

        <label>
          Tipo de piso
          <select
            value={piso}
            onChange={(event) => setPiso(event.target.value)}
          >
            <option value="">Selecione o piso</option>
            <option value="Madeira">Madeira</option>
            <option value="Sintético">Sintético</option>
            <option value="Emborrachado">Emborrachado</option>
          </select>
        </label>

        <label>
          Modalidade
          <select
            value={modalidade}
            onChange={(event) => setModalidade(event.target.value)}
          >
            <option value="">Selecione a modalidade</option>
            <option value="Futsal">Futsal</option>
            <option value="Basquete">Basquete</option>
            <option value="Vôlei">Vôlei</option>
          </select>
        </label>

        <label>
          Data
          <input
            type="date"
            value={data}
            onChange={(event) => setData(event.target.value)}
          />
        </label>

        <label>
          Horário
          <input
            type="time"
            value={horario}
            onChange={(event) => setHorario(event.target.value)}
          />
        </label>

        <label>
          Duração
          <input
            type="number"
            min="1"
            value={duracao}
            onChange={(event) => setDuracao(event.target.value)}
          />
        </label>

        <button type="submit" disabled={!formularioValido}>
          Agendar quadra
        </button>
      </form>
    </section>
  )
}

export default FormulariosAgendamentos