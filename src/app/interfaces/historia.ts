export interface Historia {
    id: number,
    titulo: string,
    max_ciclos: number,
    ciclo_atual: number,
    tempo_ciclo: number,
    finalizada: number,
    senha: number,
    usuario_id: {
        id: number,
        nome: string,
        login: string
    },
    dthr_criacao: string,
    paragrafos: [
        {
            id: number,
            texto: string,
            ciclo: number,
            usuario_id: {
                id: number,
                nome: string,
                login: string
            },
            historia_id: number,
            votou: boolean
        }
    ]
}
