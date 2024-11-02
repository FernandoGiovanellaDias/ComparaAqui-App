import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

import Icon from "../../assets/images/icon-category.png";
import { Product, useDados } from '@/contexts/DadosContext';
import styles, { stylesActive } from './styles';
import { textStyle, textStyleActive } from '@/assets/geralStyles';

export type DetalhamentoListProps = {
    produtos: Product[];
}



export const DetalhamentoList = ({ produtos }: DetalhamentoListProps) => {



    const ItemDetalhamentoList = ({ item }: { item: Product }) => {
        return <>
            <View style={styles.itemContainer}>
                <Text style={styles.icon}>{item.name}</Text>
                <Text style={styles.icon}>R$ {item.price}</Text>
            </View>
        </>
    }

    return (
        <View style={{ flex: 1, paddingVertical: 10 }}>
            <FlatList
                data={produtos}
                renderItem={ItemDetalhamentoList}
                keyExtractor={(item) => item.id?.toString() || ''}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};
