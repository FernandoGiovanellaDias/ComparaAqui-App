import axios from "axios";
import { TipoRetorno, URL_API } from "..";
import { Category } from "@/contexts/DadosContext";


export type ListaCategoria = {
    lista: Category[],
}

export type RetornoCategorias = {
    type: TipoRetorno,
    data?: ListaCategoria,
    error?: string,
}

export async function recuperarCategorias(callback = (data: RetornoCategorias) => { }) {
    try {
        const response = await axios.get(URL_API + "/categorias");
        callback({ type: TipoRetorno.SUCCESS, data: response.data });[]
    } catch (error) {
        console.error(error);
        callback({ type: TipoRetorno.FAIL, error: "Falha ao realizar o Login" });
    }

}