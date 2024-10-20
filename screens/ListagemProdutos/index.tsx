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
import { StackNavigation, StackTypes } from '@/app';
import { recuperarProdutos, RetornoProdutos } from '@/util/produtoUtils';
import { useNavigation } from 'expo-router';
import CustomBanner from '@/components/CustomBanner';


export type ListagemProdutosProps = {
    categoriaSelecionada: Category | undefined | null
}

type RouteListagemProdutosProps = {
    route: RouteProp<StackNavigation, 'ListagemProdutos'>; // Ajuste a tipagem para usar RouteProp
};


export const ListagemProdutos = () => {

    const { produtosSelecionados } = useDados();
    const navigation = useNavigation<StackTypes>();
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


    const [ativarAlerta, setAtivarAlerta] = useState(false)

    const exibirAlerta = () => {
        setAtivarAlerta(true);
        setTimeout(() => { if (!ativarAlerta) { setAtivarAlerta(false) } }, 3000);
    }

    const abrirSelecionados = () => {
        if (produtosSelecionados.length > 0) {
            navigation.navigate("ListagemSelecionados")
            return;
        }
        exibirAlerta();
    }
    
    const abrirMercados = () => {
        if (produtosSelecionados.length > 0) {
            navigation.navigate("ListagemMercados")
            return;
        }
        exibirAlerta();
    }

    return (
        <>
            <CustomBanner visible={ativarAlerta} msg='É necessário selecionar produtos para seguir' />
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
                <CustomButton title="Produtos Selecionados" onPress={() => { abrirSelecionados() }} />
                <CustomButton title="Buscar por mercados" onPress={() => { abrirMercados() }} />
            </View>
        </>
    );
};
