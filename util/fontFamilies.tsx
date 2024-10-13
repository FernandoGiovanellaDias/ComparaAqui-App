import { Platform } from 'react-native';

export const getFontFamily = (
    weight: 'normal' | 'medium' | 'semiBold' | 'bold',
) => {
    const selectedFontFamily = fontFamilies.POPPINS;
    return selectedFontFamily[weight];
};

export const fontFamilies = {
    POPPINS: {
        normal:'Poppins-Regular',
        medium:'Poppins-Medium',
        bold:'Poppins-Bold',
        black:'Poppins-Black',
        extraBold:'Poppins-ExtraBold',
        extraLight:'Poppins-ExtraLight',
        italic:'Poppins-Italic',
        light:'Poppins-Light',
        semiBold:'Poppins-SemiBold',
        thin:'Poppins-Thin',
    },
    // Adjust the above code to fit your chosen fonts' names
};