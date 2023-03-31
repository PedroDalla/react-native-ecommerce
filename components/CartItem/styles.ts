import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: "#d8d8d8",
        padding: 20,
        borderBottomWidth: 1,
    },
    cartItemImage: {
        width: 120,
        height: 100,
        marginRight: 15,
    },
    cartItemDetails: {
        flex: 1,
    },
    cartItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cartItemPrice: {
        fontSize: 16,
        color: '#888',
        marginBottom: 5,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    counterValue: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    counterButton: {
        fontSize: 18,
        fontWeight: "500",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        color: "#ffffff",
    },
    addButton: {
        backgroundColor: '#00C853',
    },
    removeButton: {
        backgroundColor: '#c60000',
    }
});

export default styles