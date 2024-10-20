import { StyleSheet } from "react-native";

export const textStyle = StyleSheet.create({
    titlePage: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
    },
    text: {
        fontSize: 14,
    },
    titulo: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    tituloCaracteristicas: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#6A6A6A'
    },
    descricaoProdutos: {
        fontSize: 12,
        color: '#6A6A6A'
    },
    totalItens: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});



export const textStyleActive = StyleSheet.create({
    tituloCaracteristicas: {
        opacity: 0.7,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#2B53A0'
    },
    descricaoProdutos: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#2B53A0'
    }
});
