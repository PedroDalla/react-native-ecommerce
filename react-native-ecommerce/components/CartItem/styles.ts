import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cartItemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
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
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#ddd',
    },
});

export default styles