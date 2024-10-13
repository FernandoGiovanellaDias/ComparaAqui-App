// src/components/CategoryGrid.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import Icon from "../../assets/images/icon-category.png";
import { Category, useDados } from '@/contexts/DadosContext';

export type CategoryGridProps = {
    categorias: Category[];
}


const CategoryGrid = ({categorias}:CategoryGridProps) => {
    const renderItem = ({ item }: { item: Category }) => (
        <TouchableOpacity style={styles.categoryItem}>
            <Image source={Icon} style={styles.icon} />
            <Text style={styles.categoryText}>{item.title}</Text>
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

const styles = StyleSheet.create({
    grid: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    categoryItem: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#E2E2E2',
        borderColor: '#A8A9B0',
        borderWidth: 1,
        borderRadius: 10,
    },
    icon: {
        flex: 1,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 14,
    },
});

export default CategoryGrid;
