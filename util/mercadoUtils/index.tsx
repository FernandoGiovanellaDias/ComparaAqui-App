import axios from "axios";
import { TipoRetorno, URL_API } from "..";
import { Market, Product } from "@/contexts/DadosContext";
import { RetornoProdutos } from "../produtoUtils";


export type ListaMercado = {
    lista: Market[],
}

export type RetornoMercados = {
    type: TipoRetorno,
    data?: ListaMercado,
    error?: string,
}

export async function recuperarMercados(produtosSelecionados:Product[], callback = (data: RetornoMercados) => { }) {
    try {
        const response = await axios.post(URL_API + "/v1/recuperarMercadPorProdutos", {
            id_produtos: produtosSelecionados.map(i=>i.id)
        });
        callback({ type: TipoRetorno.SUCCESS, data: response.data });[]
    } catch (error) {
        console.error(error);
        callback({ type: TipoRetorno.FAIL, error: "Falha ao realizar o Login" });
    }

}
export async function recuperarDetalhamento(mercado: Market | null | undefined, produtosSelecionados:Product[], callback = (data: RetornoProdutos) => { }) {
    try {
        let url:string = URL_API + "/v1/detalhamentoPorMercado";
        const response = await axios.post(url, {
            id_mercado: mercado?.id ?? null,
            id_produtos: produtosSelecionados.map(i=>i.id)
        });
        callback({ type: TipoRetorno.SUCCESS, data: response.data });[]
    } catch (error) {
        console.error(error);
        callback({ type: TipoRetorno.FAIL, error: "Falha ao realizar o Login" });
    }

}