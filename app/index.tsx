import TopBar from "@/components/TopBar";
import { DadosProvider } from "@/contexts/DadosContext";
import { Home } from "@/screens/Home";
import { ListagemProdutos } from "@/screens/ListagemProdutos";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';


import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

type StackNavigation = {
  Home: undefined;
  ListagemProdutos: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function App() {

  return (
    <DadosProvider>
      <StatusBar backgroundColor="#EAEAEA" barStyle="dark-content"/>
      <SafeAreaView style={{ flex: 1 }}>
        <TopBar />
        <NavigationContainer independent={true}>
          <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#D9D9D9' } }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListagemProdutos" component={ListagemProdutos} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </DadosProvider>
  );
}