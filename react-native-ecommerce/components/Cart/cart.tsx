import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getProducts, Product } from '../../data/api';
import { useAppSelector } from '../../redux/hooks';
import { CartItem } from "../CartItem/cartItem"
import styles from "./styles"


export const Cart = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const cartItems = useAppSelector(state => state.cart.items);

    //Initial fetch based on the current items in the cart
    useEffect(() => {
        const fetchProduct = async () => {
            let products = []
            try {
                products = await getProducts({ itemIds: cartItems.map(item => item.id) })
            } catch (err) {
                throw new Error(err)
            }

            if (products.length) {
                setProducts(products)
                setLoading(false)
            }
        }

        if (cartItems.length) {
            fetchProduct()
        } else {
            setLoading(false)
        }
    }, [])

    //Removes cart items according to the global state
    useEffect(() => {
        setProducts(products => products.filter(product => cartItems.some(cartItem => cartItem.id === product.id)))
    }, [cartItems])

    if (!products || products.length < 1) {
        if (loading) {
            // Handle loading here (by adding a shimmer effect, for example)
            return null
        } else {
            //Loading is false and cart is empty
            return (
                <View style={styles.emptyMessageContainer}>
                    <Text style={styles.emptyMessageText}>Looks like your cart is empty :(</Text>
                </View>
            )
        }
    }

    return (
        <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>Shopping Cart</Text>
            <View style={styles.cartItemsContainer}>
                {products.map(item => {
                    const itemInCart = cartItems.find(cI => cI.id === item.id)
                    const count = itemInCart ? itemInCart.count : 0

                    return (
                        <CartItem key={item.id} item={item} count={count} />
                    )
                })}
            </View>
            <Text style={styles.cartTotal}>Total: ${
                products.reduce((acc, item) => acc + item.price * (cartItems.find(cI => cI.id === item.id)?.count || 0), 0)}</Text>
            <StatusBar style="auto" />
        </View>
    );
};
