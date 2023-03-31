import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { RootParamList } from '../../App';
import { getProducts, Product } from '../../data/api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { cartActions } from '../../redux/slices/cartSlice/cartSlice';
import { styles } from './styles';
import { AntDesign } from "@expo/vector-icons"

type NavigationProps = NativeStackScreenProps<RootParamList, 'Shopping'>;

type ShoppingProps = {
    navigation: NavigationProps["navigation"]
}

export const Shopping: React.FC<ShoppingProps> = ({ navigation }) => {
    const [products, setProducts] = useState<Product[]>([])
    const cart = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const handleAddToCart = (item: Product) => {
        dispatch(cartActions.addItem(item.id));
    };

    const handleProductPress = (item: Product) => {
        navigation.navigate("ProductDetails", { itemId: item.id })
    }

    const handleCartPress = () => {
        navigation.navigate("Cart")
    }
    useEffect(() => {
        const fetchProducts = async () => {
            let products = []
            try {
                products = await getProducts()
            } catch (err) {
                throw new Error(err)
            }

            if (products.length) {
                setProducts(products)
            }
        }

        fetchProducts()
    }, [])

    const renderShoppingItem: React.FC<{ item: Product }> = ({ item }) => {
        return (
            <TouchableOpacity style={styles.shoppingItemContainer} onPress={() => handleProductPress(item)}>
                <Image style={styles.shoppingItemImage} source={{ uri: item.image }} />
                <Text style={styles.shoppingItemTitle}>{item.name}</Text>
                <Text style={styles.shoppingItemPrice}>${item.price}</Text>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
                    <Text style={styles.addToCartButtonText}>Add to Cart +</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.shoppingContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.shoppingTitle}>Available Items</Text>
                <TouchableOpacity style={styles.cartContainer} onPress={() => handleCartPress()}>
                    <AntDesign name="shoppingcart" size={40} color="black" />
                    <Text style={styles.cartText}>{cart.count}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={products}
                renderItem={renderShoppingItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.shoppingListContainer}
            />

            <StatusBar style="auto" />
        </View>
    );
};