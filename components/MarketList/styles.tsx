import { textStyle } from "@/assets/geralStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listContainer: {
        marginHorizontal: 20,
        rowGap: 5
    },

    icon: {
        resizeMode: 'contain',
        marginBottom: 5,
        fontWeight: '600',
    },
    itemContainer: {
        backgroundColor: '#DDDFE8',
        minHeight: 80,
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 2,
        padding: 20,
    },

    textCustoTotal: {
        ...textStyle.tituloCaracteristicas,
        marginLeft: 5,
        color: '#2B53A0'
    },

    containerDetalhamento:{
        backgroundColor: '#E9E7F6', 
        borderWidth: 1,
        borderRadius: 20, 
        alignItems: 'center', 
        marginTop: 10
    }
});

export const stylesActive = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#EFE1D1',
        minHeight: 80,
        borderRadius: 20,
        borderColor: '#FFF1E1',
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});

export default styles;
