import axios from "axios";
import { TipoRetorno, URL_API } from "..";
import { Market } from "@/contexts/DadosContext";


export type ListaMercado = {
    lista: Market[],
}

export type RetornoMercados = {
    type: TipoRetorno,
    data?: ListaMercado,
    error?: string,
}

export async function recuperarMercados(callback = (data: RetornoMercados) => { }) {
    try {
        const response = await axios.get(URL_API + "/mercados");
        callback({ type: TipoRetorno.SUCCESS, data: response.data });[]
    } catch (error) {
        console.error(error);
        callback({ type: TipoRetorno.FAIL, error: "Falha ao realizar o Login" });
    }

}