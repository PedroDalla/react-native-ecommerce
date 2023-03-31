import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { Cart } from './components/Cart/cart';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store';
import { Shopping } from './components/Shopping/shopping';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductDetails } from './components/ProductDetails/productDetails';

export type RootParamList = {
  Shopping: undefined,
  Cart: undefined,
  ProductDetails: { itemId: number }
}



const Stack = createNativeStackNavigator<RootParamList>()


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Shopping'>
          <Stack.Screen name="Shopping" component={Shopping} />
          <Stack.Screen name="ProductDetails" options={{ title: "Product Details" }} component={ProductDetails} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}