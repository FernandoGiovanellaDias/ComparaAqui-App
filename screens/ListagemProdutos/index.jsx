// src/screens/Home.tsx
import CategoryGrid from '@/components/CategoryGrid';
import CustomButton from '@/components/CustomButton';
import TopBar from '@/components/TopBar';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import Logo from "../../assets/images/logo.svg";

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app';
import { useDados } from '@/contexts/DadosContext';




export const ListagemProdutos = () => {

    const { categorias } = useDados();

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Listagem de Produtos</Text>
            </View>


            <View style={styles.footerContainer}>
                <CustomButton title="Produtos Selecionados" onPress={() => { /* Função ao pressionar */ }} />
                <CustomButton title="Ver todos os produtos" onPress={() => { /* Função ao pressionar */ }} />
                <View style={{ marginTop: 20 }} >
                    <CustomButton title="Buscar por mercados" onPress={() => { /* Função ao pressionar */ }} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    headerContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    footerContainer: {
        alignItems: 'stretch',
        gap: 10,
        paddingVertical: 20
    },
});
