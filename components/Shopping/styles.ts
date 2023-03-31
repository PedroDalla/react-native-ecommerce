import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    shoppingContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    shoppingTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    shoppingListContainer: {
        alignItems: 'center',
    },
    shoppingItemContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    shoppingItemImage: {
        width: 300,
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    shoppingItemTitle: {
        fontSize: 18,
        marginBottom: 5,
    },
    shoppingItemPrice: {
        fontSize: 18,
        marginBottom: 10,
        padding: 2,
    },
    addToCartButton: {
        backgroundColor: '#00C853',
        padding: 10,
        borderRadius: 5,
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cartContainer: {
        width: "100%",
        padding: 10,
        alignItems: "flex-end"
    },
    cartText: {
        fontSize: 18,
    }
});
