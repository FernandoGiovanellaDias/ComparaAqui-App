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
import CustomBanner from '@/components/CustomBanner';
import { ActivityIndicator } from 'react-native-paper';

export const Home = () => {

  const navigation = useNavigation<StackTypes>();
  const { produtosSelecionados } = useDados();


  const [loading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState<Category[]>([]);

  useEffect(() => {
    recuperarCategorias(({ type, data, error }: RetornoCategorias) => {
      setCategorias(data?.lista ?? []);
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
        <Text style={textStyle.titlePage}>Categorias de Produtos</Text>
      </View>

      {
        !loading ?
          <CategoryGrid categorias={categorias} />
          :
          <>
              <View style={{ flex: 1 }}>
                  <ActivityIndicator color="#D0935F" animating={true} size={50} />
              </View>
          </>
      }

      <View style={styles.footerContainer}>
        <CustomButton title="Produtos Selecionados" onPress={() => { abrirSelecionados() }} />
        <CustomButton title="Ver todos os produtos" onPress={() => { navigation.navigate("ListagemProdutos") }} />
        <View style={{ marginTop: 20 }} >
          <CustomButton title="Buscar por mercados" onPress={() => { abrirMercados() }} />
        </View>
      </View>
    </>
  );
};