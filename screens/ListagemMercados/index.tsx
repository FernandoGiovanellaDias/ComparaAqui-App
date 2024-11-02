
import CustomButton from '@/components/CustomButton';
import TopBar from '@/components/TopBar';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDados, Category, Product, Market } from '@/contexts/DadosContext';
import styles from './styles';
import { textStyle } from '@/assets/geralStyles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigation, StackTypes } from '@/app';
import { useNavigation } from 'expo-router';
import { recuperarMercados, RetornoMercados } from '@/util/mercadoUtils';
import { MarketList } from '@/components/MarketList';



export const ListagemMercados = () => {


    const navigation = useNavigation<StackTypes>();
    const { produtosSelecionados } = useDados();

    if (produtosSelecionados.length == 0) {
        navigation.goBack();
    }

    const [loading, setLoading] = useState(true);
    const [mercados, setMercados] = useState<Market[]>([]);

    useEffect(() => {
        recuperarMercados(produtosSelecionados ?? [], ({ type, data, error }: RetornoMercados) => {
            setMercados(data?.lista ?? []);
            setLoading(false);
        });
    }, []);


    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={textStyle.titlePage}>Mercados disponíveis</Text>
            </View>
            {
                !loading ?
                    <MarketList mercados={mercados} />
                    :
                    <></>
            }

        </>
    );
};
