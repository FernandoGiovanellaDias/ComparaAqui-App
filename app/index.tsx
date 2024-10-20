import TopBar from "@/components/TopBar";
import { Category, DadosProvider } from "@/contexts/DadosContext";
import { Home } from "@/screens/Home";
import { ListagemSelecionados } from "@/screens/ListagemSelecionados";
import { ListagemProdutos, ListagemProdutosProps } from "@/screens/ListagemProdutos";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar } from "react-native";
import { ListagemMercados } from "@/screens/ListagemMercados";

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Home: undefined;
  ListagemProdutos: ListagemProdutosProps | undefined;
  ListagemSelecionados: undefined;
  ListagemMercados: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function App() {
  return (
    <DadosProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#EAEAEA" barStyle="dark-content" />
        <TopBar />
        <NavigationContainer independent={true}>
          <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#D9D9D9' } }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListagemProdutos" component={ListagemProdutos} />
            <Stack.Screen name="ListagemSelecionados" component={ListagemSelecionados} />
            <Stack.Screen name="ListagemMercados" component={ListagemMercados} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </DadosProvider>
  );
}
