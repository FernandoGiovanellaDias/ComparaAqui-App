import axios from "axios";
import { TipoRetorno, URL_API } from "..";
import { Product } from "@/contexts/DadosContext";


export type ListaProduto = {
    lista: Product[],
}

export type RetornoProdutos = {
    type: TipoRetorno,
    data?: ListaProduto,
    error?: string,
}

export async function recuperarProdutos(idCategoria: number | null, callback = (data: RetornoProdutos) => { }) {
    try {
        let url:string = URL_API + "/produtos";
        if(idCategoria != null){
            url += idCategoria;
        }
        const response = await axios.get(url);
        callback({ type: TipoRetorno.SUCCESS, data: response.data });[]
    } catch (error) {
        console.error(error);
        callback({ type: TipoRetorno.FAIL, error: "Falha ao realizar o Login" });
    }

}