import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../../data/api';
import { useAppDispatch } from '../../redux/hooks';
import { cartActions } from "../../redux/slices/cartSlice/cartSlice"
import styles from "./styles"

type CartItemProps = {
    item: Product,
    count: number
}

export const CartItem: React.FC<CartItemProps> = ({ item, count }) => {
    const dispatch = useAppDispatch();

    const onDecrement = () => {
        dispatch(cartActions.removeItem(item.id));
    };

    const onIncrement = () => {
        dispatch(cartActions.addItem(item.id));
    };

    return (
        <View style={styles.cartItemContainer}>
            <Image style={styles.cartItemImage} source={{ uri: item.image }} />
            <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemTitle}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>${item.price}</Text>
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={() => onDecrement()}>
                        <Text style={styles.counterButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterValue}>{count}</Text>
                    <TouchableOpacity onPress={() => onIncrement()}>
                        <Text style={styles.counterButton}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
