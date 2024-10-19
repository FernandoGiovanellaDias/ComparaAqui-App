// src/screens/Home.tsx
import CategoryGrid from '@/components/CategoryGrid';
import CustomButton from '@/components/CustomButton';
import TopBar from '@/components/TopBar';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import Logo from "../../assets/images/logo.svg";

import { StackNavigationProp } from '@react-navigation/stack';
import { Category, useDados } from '@/contexts/DadosContext';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '@/app';
import styles from './styles';
import { textStyle } from '@/assets/geralStyles';
import { recuperarCategorias, RetornoCategorias } from '@/util/categoriaUtils';

export const Home = () => {

  const navigation = useNavigation<StackTypes>();
  const { } = useDados();


  const [loading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState<Category[]>([]);

  useEffect(() => {
    recuperarCategorias(({ type, data, error }: RetornoCategorias) => {
      setCategorias(data?.lista ?? []);
      setLoading(false);
    });
  }, []);



  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={textStyle.titlePage}>Categorias de Produtos</Text>
      </View>

      {
        !loading ?
          <CategoryGrid categorias={categorias} />
          :
          <></>
      }

      <View style={styles.footerContainer}>
        <CustomButton title="Produtos Selecionados" onPress={() => { navigation.navigate("ListagemProdutos") }} />
        <CustomButton title="Ver todos os produtos" onPress={() => { navigation.navigate("ListagemProdutos") }} />
        <View style={{ marginTop: 20 }} >
          <CustomButton title="Buscar por mercados" onPress={() => { /* Função ao pressionar */ }} />
        </View>
      </View>
    </>
  );
};