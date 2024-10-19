import { ProductList } from '@/components/ProductList';
import CustomButton from '@/components/CustomButton';
import TopBar from '@/components/TopBar';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDados, Category, Product } from '@/contexts/DadosContext';
import styles from './styles';
import { textStyle } from '@/assets/geralStyles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigation, StackTypes } from '@/app';
import { recuperarProdutos, RetornoProdutos } from '@/util/produtoUtils';
import { useNavigation } from 'expo-router';



export const ListagemSelecionados = () => {


    const navigation = useNavigation<StackTypes>();
    const { produtosSelecionados } = useDados();

    if (produtosSelecionados.length == 0) {
        navigation.goBack();
    }

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={textStyle.titlePage}>Produtos Selecinados</Text>
            </View>

            <ProductList produtos={produtosSelecionados} />

            <View style={styles.footerContainer}>
                <View style={styles.headerContainer}>
                    <Text style={textStyle.totalItens}>Total de itens</Text>
                    <Text style={{ ...textStyle.totalItens, color: '#2B53A0' }}>
                        {produtosSelecionados.length}
                    </Text>
                </View>
                <CustomButton title="Buscar por mercados" onPress={() => { /* Função ao pressionar */ }} />
            </View>
        </>
    );
};
