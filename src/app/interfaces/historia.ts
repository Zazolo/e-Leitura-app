export interface Historia {
    id: number,
    titulo: string,
    total_ciclos: number,
    ciclo_atual: number,
    tempo_ciclo: number,
    encerrada: boolean,
    senha?: number,
    criador: {
        id: number,
        nome: string,
        login: string,
        pontos: number
    },
    dthr_criacao: string,
    paragrafos: [
        {
            id: number,
            texto: string,
            ciclo: number,
            criador: {
                id: number,
                nome: string,
                login: string
            },
            sala: number
        }
    ]
}
