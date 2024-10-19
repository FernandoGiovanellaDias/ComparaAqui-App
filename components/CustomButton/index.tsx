// src/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';
import { textStyle } from '@/assets/geralStyles';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
}

const CustomButton =  ({ title, onPress }:CustomButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={textStyle.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
