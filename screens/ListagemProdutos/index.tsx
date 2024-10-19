// src/screens/Home.tsx
import { ProductList } from '@/components/ProductList';
import CustomButton from '@/components/CustomButton';
import TopBar from '@/components/TopBar';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import Logo from "../../assets/images/logo.svg";

import { StackNavigationProp } from '@react-navigation/stack';
import { useDados, Category, Product } from '@/contexts/DadosContext';
import styles from './styles';
import { textStyle } from '@/assets/geralStyles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigation } from '@/app';
import { recuperarProdutos, RetornoProdutos } from '@/util/produtoUtils';


export type ListagemProdutosProps = {
    categoriaSelecionada: Category | undefined | null
}

type RouteListagemProdutosProps = {
    route: RouteProp<StackNavigation, 'ListagemProdutos'>; // Ajuste a tipagem para usar RouteProp
};


export const ListagemProdutos = () => {

    const route = useRoute<RouteProp<StackNavigation, 'ListagemProdutos'>>();
    const { categoriaSelecionada } = route.params ?? { categoriaSelecionada: null };

    const [loading, setLoading] = useState(true);
    const [produtos, setProdutos] = useState<Product[]>([]);

    useEffect(() => {
        recuperarProdutos(categoriaSelecionada?.id ?? null, ({ type, data, error }: RetornoProdutos) => {
            setProdutos(data?.lista ?? []);
            setLoading(false);
        });
    }, []);



    return (
        <>
            <View style={styles.headerContainer}>
                {
                    categoriaSelecionada === null ?
                        <Text style={textStyle.titlePage}>Todos os Produtos</Text>
                        :
                        <Text style={textStyle.titlePage}>Produtos de {categoriaSelecionada!.title}</Text>
                }
            </View>


            {
                !loading ?
                    <ProductList produtos={produtos} />
                    :
                    <></>
            }


            <View style={styles.footerContainer}>
                <CustomButton title="Produtos Selecionados" onPress={() => { /* Função ao pressionar */ }} />
                <CustomButton title="Buscar por mercados" onPress={() => { /* Função ao pressionar */ }} />
            </View>
        </>
    );
};
