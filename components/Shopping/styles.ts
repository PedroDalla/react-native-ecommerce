import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    shoppingContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    shoppingTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20
    },
    headerContainer: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    shoppingListContainer: {
        alignItems: 'center',
        width: "100%"
    },
    shoppingItemContainer: {
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#d8d8d8",
        padding: 20,
    },
    shoppingItemImage: {
        width: 300,
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    shoppingItemTitle: {
        fontSize: 20,
        fontWeight: "600",
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
        marginBottom: 10,
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cartContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "flex-end"
    },
    cartText: {
        fontSize: 15,
        width: 26,
        height: 26,
        borderRadius: 13,
        fontWeight: "600",
        backgroundColor: "green",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
        color: "#ffffff",
        position: "absolute",
        top: 0,
        right: 10
    },
});
