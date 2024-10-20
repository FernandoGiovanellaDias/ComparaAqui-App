import { ActionList, listReducer } from "@/util/listUtils";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export type Category = {
  id: number | null | undefined;
  title: string | null | undefined;
  icon: any;
};

export enum Classification {
  RECOMENDADO = "RECOMENDADO",
  PARCIAL = "PARCIAL",
  GERAL = "GERAL"
}

export type Market = {
  id: number | null | undefined;
  name: string | null | undefined;
  classification: Classification | null | undefined;
  totalValue: number | null | undefined;
  totalItems: number | null | undefined;
  itensFaltantes: Product[] | null | undefined;
};

export type Product = {
  id: number | null | undefined;
  name: string | null | undefined;
  description: string | null | undefined;
  price: number | null | undefined;
};

type DadosProviderProps = {
  children: React.ReactNode;
};

type DadosProviderData = {
  produtosSelecionados: Product[];
  addProduto: (item: Product) => void,
  removeProduto: (item: Product) => void
};

export const DadosProviderContext = createContext<DadosProviderData>({
  produtosSelecionados: [],
  addProduto: (item: Product) => { },
  removeProduto: (item: Product) => { }
});

export function DadosProvider({ children }: DadosProviderProps) {
  const [produtosSelecionados, reduce] = useReducer(listReducer<Product>, []);

  const addProduto = (item: Product) => {
    reduce({ type: ActionList.ADD_ITEM, item });
  };

  const removeProduto = (item: Product) => {
    reduce({ type: ActionList.REMOVE_ITEM, item });
  };
  
  return (
    <DadosProviderContext.Provider
      value={{ produtosSelecionados, addProduto, removeProduto }}
    >
      {children}
    </DadosProviderContext.Provider>
  );
}

export const useDados = () => useContext(DadosProviderContext);