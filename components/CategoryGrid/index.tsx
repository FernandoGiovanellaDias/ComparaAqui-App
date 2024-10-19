// src/components/CategoryGrid.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import Icon from "../../assets/images/icon-category.png";
import { Category, useDados } from '@/contexts/DadosContext';
import styles from './styles';
import { textStyle } from '@/assets/geralStyles';
import { useNavigation } from 'expo-router';
import { StackTypes } from '@/app';

export type CategoryGridProps = {
    categorias: Category[];
}


const CategoryGrid = ({categorias}:CategoryGridProps) => {

    
  const navigation = useNavigation<StackTypes>();

    const renderItem = ({ item }: { item: Category }) => (
        <TouchableOpacity style={styles.categoryItem} onPress={()=>{navigation.navigate("ListagemProdutos", {categoriaSelecionada: item});}}>
            <Image source={Icon} style={styles.icon} />
            <Text style={textStyle.text}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={categorias}
            renderItem={renderItem}
            keyExtractor={(item) => item.id?.toString() || ''}
            numColumns={3}
            contentContainerStyle={styles.grid}
        />
    );
};

export default CategoryGrid;
