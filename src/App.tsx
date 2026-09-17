import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Resumo from './components/Resumo'
import FormulariosAgendamentos from './components/FormulariosAgendamentos'
import type { Agendamento } from './types/Agendamento'

function App() {
const [agendamentos, setAgendamentos] = useState<Agendamento[]>([
    {
      id: 1,
      quadra: "Quadra 1",
      piso: "Madeira",
      modalidade: "Basquete",
      data: "17/09/2026",
      horario: "14:00",
      duracao: 2,
      status: "Confirmado",
    },
    {
      id: 2,
      quadra: "Quadra 2",
      piso: "Sintético",
      modalidade: "Futsal",
      data: "17/09/2026",
      horario: "15:00",
      duracao: 1,
      status: "Pendente",
    },
    {
      id: 3,
      quadra: "Quadra 3",
      piso: "Emborrachado",
      modalidade: "Vôlei",
      data: "17/09/2026",
      horario: "16:00",
      duracao: 2,
      status: "Confirmado",
    },
    {
      id: 4,
      quadra: "Quadra 1",
      piso: "Madeira",
      modalidade: "Futsal",
      data: "18/09/2026",
      horario: "10:00",
      duracao: 1,
      status: "Cancelado",
      motivoCancelamento: "Cliente solicitou o cancelamento",
    },
    {
      id: 5,
      quadra: "Quadra 2",
      piso: "Sintético",
      modalidade: "Vôlei",
      data: "18/09/2026",
      horario: "14:00",
      duracao: 2,
      status: "Concluído",
    },
  ])

  return (
    <>
      <Header />

      <main>
        <Resumo 
          total={agendamentos.length}
          confirmados={agendamentos.filter(
            (agendamento) => agendamento.status === "Confirmado"
          ).length}
          pendentes={agendamentos.filter(
            (agendamento) => agendamento.status === "Pendente"
          ).length}
          cancelados={agendamentos.filter(
            (agendamento) => agendamento.status === "Cancelado"
          ).length}
        />
        <FormulariosAgendamentos />
      </main>
    </>
  )
}

export default App