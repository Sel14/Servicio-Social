export interface PreguntaInterface {
    idunidad: string,
    unidad: string,
    idtema: string,
    tema: string,
    idreactivo: string,
    pregunta: string,
    dificultad: number,
    requiereProcedimiento: boolean,
    correcto: number,
    listOfRespuestas?: (RespuestaInterface)[] | null,
}

export interface RespuestaInterface {
    idrespuesta: string,
    respuesta: string,
    idsigreactivo: string
}