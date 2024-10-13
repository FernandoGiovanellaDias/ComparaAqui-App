// src/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
}

const CustomButton =  ({ title, onPress }:CustomButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E2E2E2',
        borderColor: '#000',
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
    },
});

export default CustomButton;
