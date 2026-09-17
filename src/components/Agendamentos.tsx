import type { Agendamento } from "../types/Agendamento"

interface AgendamentosProps {
    agendamentos: Agendamento[]
}

function Agendamentos({ agendamentos }: AgendamentosProps) {
    return (
        <section>
            <h2>Agendamentos</h2>

            {agendamentos.map((agendamento) => (
                <div key={agendamento.id}>
                    <h3>{agendamento.quadra}</h3>
                    <p>Modalidade: {agendamento.modalidade}</p>
                    <p>Data: {agendamento.data}</p>
                    <p>Horário: {agendamento.horario}</p>
                    <p>Duração: {agendamento.duracao} horas</p>
                    <p>Status: {agendamento.status}</p>
                </div>
            ))
            }
        </section>
    )
}

export default Agendamentos