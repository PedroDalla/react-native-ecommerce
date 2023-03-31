import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    productImage: {
        width: '100%',
        height: 200,
    },
    productDetailsContainer: {
        padding: 20,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
    addToCartButton: {
        backgroundColor: '#00C853',
        padding: 10,
        borderRadius: 5,
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    shimmer: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        minHeight: "1rem",
        backgroundColor: "#e8e8e8",
    }
});