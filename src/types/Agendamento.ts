export interface Agendamento {
  id: number
  quadra: string
  piso: string
  modalidade: string
  data: string
  horario: string
  duracao: number
  status: "Pendente" | "Confirmado" | "Cancelado" | "Concluído"
  motivoCancelamento?: string
}