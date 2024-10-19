import { ActionList, listReducer } from "@/util/listUtils";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export type Category = {
  id: number | null | undefined;
  title: string | null | undefined;
  icon: any;
};

export type Product = {
  id: number | null | undefined;
  name: string | null | undefined;
  description: string | null | undefined;
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