interface ResumoProps {
    total: number
    confirmados: number
    pendentes: number
    cancelados: number
}

function Resumo({
    total,
    confirmados,
    pendentes,
    cancelados
}: ResumoProps) {
    return(
        <section>
            <h2>Resumo dos Agendamentos</h2>
            <p>Total: {total}</p>
            <p>Confirmados: {confirmados}</p>
            <p>Pendentes: {pendentes}</p>
            <p>Cancelados: {cancelados}</p>
        </section>
    )
}

export default Resumo