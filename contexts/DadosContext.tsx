/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useReducer, useState } from "react";

export type Category = {
    id: number | null | undefined;
    title: string | null | undefined;
    icon: any;
}

export type Product = {
    id: number | null | undefined;
    name: string | null | undefined;
    description: string | null | undefined;
}


type DadosProviderProps = {
    children: React.ReactNode;
}

type DadosProviderData = {
    categoriaSelecionada: Category[];
    categorias: Category[];
    produtosSelecionados: Product[];
    produtos: Product[];
}

const CargaInicial: DadosProviderData = { categoriaSelecionada: [], categorias: [], produtos:[], produtosSelecionados: [] };

const mockCategories: Category[] = [
    { id: 1, title: 'limpeza', icon: null },
    { id: 2, title: 'limpeza', icon: null },
    { id: 3, title: 'limpeza', icon: null },
    { id: 4, title: 'limpeza', icon: null },
    { id: 5, title: 'limpeza', icon: null },
    { id: 6, title: 'limpeza', icon: null },
    { id: 7, title: 'limpeza', icon: null },
    { id: 8, title: 'limpeza', icon: null },
    { id: 9, title: 'limpeza', icon: null },
    { id: 10, title: 'limpeza', icon: null },
];

const mockProdutos: Product[] = [
    { id: 1, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 2, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 3, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 4, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 5, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 6, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 7, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 8, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 9, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
    { id: 10, name: 'Detergente HOMO', description: 'Embalagem em papel sustentável' },
];




export const DadosProviderContext = createContext<DadosProviderData>(CargaInicial);
export function DadosProvider({ children }: DadosProviderProps) {



    return (
        <DadosProviderContext.Provider value={{ categorias: mockCategories, categoriaSelecionada: [], produtos: mockProdutos, produtosSelecionados:[] }}>
            {children}
        </DadosProviderContext.Provider>
    );
}


export const useDados = () => useContext(DadosProviderContext);