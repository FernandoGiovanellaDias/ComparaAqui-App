import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import Logo from "../../assets/images/logo.svg";

import { StackNavigationProp } from '@react-navigation/stack';
import { useDados, Category, Product, Market } from '@/contexts/DadosContext';
import styles from './styles';
import { textStyle } from '@/assets/geralStyles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigation, StackTypes } from '@/app';
import { RetornoProdutos } from '@/util/produtoUtils';
import { useNavigation } from 'expo-router';
import CustomBanner from '@/components/CustomBanner';
import { DetalhamentoList } from '@/components/DetalhamentoList';
import { recuperarDetalhamento } from '@/util/mercadoUtils';


export type DetalhamentoProps = {
    mercadoSelecionado: Market | undefined | null
}

type RouteDetalhamentoProps = {
    route: RouteProp<StackNavigation, 'Detalhamento'>; // Ajuste a tipagem para usar RouteProp
};


export const Detalhamento = () => {

    const navigation = useNavigation<StackTypes>();
    const route = useRoute<RouteProp<StackNavigation, 'Detalhamento'>>();
    const { mercadoSelecionado } = route.params ?? { mercadoSelecionado: null };
    
    const { produtosSelecionados } = useDados();

    const [loading, setLoading] = useState(true);
    const [produtos, setProdutos] = useState<Product[]>([]);

    useEffect(() => {
        recuperarDetalhamento(mercadoSelecionado, produtosSelecionados, ({ type, data, error }: RetornoProdutos) => {
            setProdutos(data?.lista ?? []);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={textStyle.titlePage}>Detalhamento dos valores</Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
                <Text style={styles.icon}>{mercadoSelecionado!.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={textStyle.tituloCaracteristicas}>
                        Custo Total:
                    </Text>
                    <Text style={styles.textCustoTotal}>
                        R$ {mercadoSelecionado!.totalValue?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').replace('.', ',')}
                    </Text>
                </View>
            </View>



            <Text style={{...textStyle.totalItens, marginLeft: 20}}>
                Itens disponíveis do mercado
            </Text>
            {
                !loading ?
                    <DetalhamentoList produtos={produtos} />
                    :
                    <></>
            }
        </>
    );
};
