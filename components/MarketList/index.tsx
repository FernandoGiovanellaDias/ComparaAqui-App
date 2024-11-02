import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

import Icon from "../../assets/images/icon-category.png";
import { Classification, Market, useDados } from '@/contexts/DadosContext';
import styles, { stylesActive } from './styles';
import { textStyle, textStyleActive } from '@/assets/geralStyles';
import { formatCurrency } from "react-native-format-currency";
import { useNavigation } from 'expo-router';
import { StackTypes } from '@/app';

export type MarketListProps = {
    mercados: Market[];
}



export const MarketList = ({ mercados }: MarketListProps) => {

    const navigation = useNavigation<StackTypes>();
    const ItemMarketList = ({ item }: { item: Market }) => {

        if (item.classification === Classification.RECOMENDADO) {
            return <>
                <TouchableOpacity onPress={() => { navigation.navigate('Detalhamento', {mercadoSelecionado: item}) }} >
                    <View style={{ ...styles.itemContainer, backgroundColor: '#7EE9D0', borderColor: '#6DCA86' }}>
                        <Text style={styles.icon}>{item.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={textStyle.tituloCaracteristicas}>
                                Custo Total:
                            </Text>
                            <Text style={styles.textCustoTotal}>
                                R$ {item.totalValue?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').replace('.', ',')}
                            </Text>
                        </View>
                        <View style={styles.containerDetalhamento}>
                            <Text style={{ paddingTop: 2, paddingBottom: 2 }}>detalhamento de valores</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        }

        if (item.classification === Classification.PARCIAL) {
            return <>
                <TouchableOpacity onPress={() => { navigation.navigate('Detalhamento', {mercadoSelecionado: item}) }} >
                    <View style={{ ...styles.itemContainer, backgroundColor: '#E3B9A1', borderColor: '#D79494' }}>
                        <Text style={styles.icon}>{item.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={textStyle.tituloCaracteristicas}>
                                Custo Total:
                            </Text>
                            <Text style={styles.textCustoTotal}>
                                R$ {item.totalValue?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').replace('.', ',')}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#C61B1B', fontWeight: 'bold', marginBottom: 2 }}>Não possuí os itens:</Text>
                            {item.itensFaltantes?.map((faltante, index) => (
                                <>
                                    <Text key={faltante.id} style={{ color: '#C61B1B', fontWeight: 'bold', fontSize: 12 }}>
                                        {'\u2022 ' + faltante}
                                    </Text>
                                </>
                            ))}
                        </View>
                        <View style={styles.containerDetalhamento}>
                            <Text style={{ paddingTop: 2, paddingBottom: 2 }}>detalhamento de valores</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        }

        return <>
            <TouchableOpacity onPress={() => { navigation.navigate('Detalhamento', {mercadoSelecionado: item}) }} >
                <View style={styles.itemContainer}>
                    <Text style={styles.icon}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={textStyle.tituloCaracteristicas}>
                            Custo Total:
                        </Text>
                        <Text style={styles.textCustoTotal}>
                            R$ {item.totalValue?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').replace('.', ',')}
                        </Text>
                    </View>
                    <View style={styles.containerDetalhamento}>
                        <Text style={{ paddingTop: 2, paddingBottom: 2 }}>detalhamento de valores</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    }

    return (
        <View style={{ flex: 1, paddingVertical: 10 }}>
            <FlatList
                data={mercados}
                renderItem={ItemMarketList}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};
