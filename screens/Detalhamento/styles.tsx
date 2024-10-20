import { textStyle } from "@/assets/geralStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    headerContainer: {
        alignItems: 'center',
    },
    footerContainer: {
        alignItems: 'stretch',
        gap: 10,
        paddingVertical: 20
    },
    icon: {
        resizeMode: 'contain',
        marginBottom: 5,
        fontWeight: '600',
    },
    textCustoTotal: {
        ...textStyle.tituloCaracteristicas,
        marginLeft: 5,
        color: '#2B53A0'
    },
});

export default styles;
