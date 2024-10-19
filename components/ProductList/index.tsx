import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

import Icon from "../../assets/images/icon-category.png";
import { Product, useDados } from '@/contexts/DadosContext';
import styles, { stylesActive } from './styles';
import { textStyle, textStyleActive } from '@/assets/geralStyles';

export type ProductListProps = {
    produtos: Product[];
}



export const ProductList = ({ produtos }: ProductListProps) => {

    const { produtosSelecionados, addProduto, removeProduto } = useDados();

    const addFavoritos = (produto: Product, ehAdicionar:boolean) => {
        if(ehAdicionar){
            addProduto(produto);
        }else{
            removeProduto(produto);
        }
    };



    const ItemProductList = ({ item }: { item: Product }) => {
        const ehFavoritos = produtosSelecionados.some(i => i.id == item.id);
        const classes = !ehFavoritos ? styles : stylesActive;
        const classesText = !ehFavoritos ? textStyle : textStyleActive;
        return <>
            <TouchableOpacity onPress={()=>{addFavoritos(item, !ehFavoritos)}} >
                <View style={classes.itemContainer}>
                    <Text style={styles.icon}>{item.name}</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={classesText.tituloCaracteristicas}>Caracteristicas:</Text>
                        <Text style={classesText.descricaoProdutos}>{item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    }

    return (
        <View style={{ flex: 1, paddingVertical: 10 }}>
            <FlatList
                data={produtos}
                renderItem={ItemProductList}
                keyExtractor={(item) => item.id?.toString() || ''}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};
