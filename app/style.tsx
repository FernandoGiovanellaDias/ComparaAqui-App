import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#CACBD3',
        width: width,
        height: height
    }

});