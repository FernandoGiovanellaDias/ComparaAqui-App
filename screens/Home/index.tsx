// src/screens/Home.tsx
import CategoryGrid from '@/components/CategoryGrid';
import CustomButton from '@/components/CustomButton';
import TopBar from '@/components/TopBar';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import Logo from "../../assets/images/logo.svg";

import { StackNavigationProp } from '@react-navigation/stack';
import { useDados } from '@/contexts/DadosContext';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '@/app';

export const Home = () => {

  const navigation = useNavigation<StackTypes>();
  const { categorias } = useDados();

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Categorias de Produtos</Text>
      </View>

      <CategoryGrid categorias={categorias} />

      <View style={styles.footerContainer}>
        <CustomButton title="Produtos Selecionados" onPress={() => { /* Função ao pressionar */ }} />
        <CustomButton title="Ver todos os produtos" onPress={() => { navigation.navigate("ListagemProdutos") }} />
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
