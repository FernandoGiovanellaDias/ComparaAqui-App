import { StyleSheet } from "react-native";

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
        justifyContent: 'flex-start',
        width: 100,
        height: 100,
        backgroundColor: '#E2E2E2',
        borderColor: '#A8A9B0',
        borderWidth: 1,
        borderRadius: 10,
    },
    icon: {
        flex: 1,
        aspectRatio:1,
        maxHeight: 35,
        marginBottom: 5,
    },
});

export default styles;
