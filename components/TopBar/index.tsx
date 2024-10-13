// src/components/TopBar.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from "../../assets/images/logo.png";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={Logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TopBar;
