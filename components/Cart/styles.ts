import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cartTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 20,
    },
    cartItemsContainer: {
        marginBottom: 20,
        borderBottomColor: "#d8d8d8",
        borderBottomWidth: 1,
    },
    cartTotal: {
        paddingBottom: 20,
        paddingRight: 10,
        fontSize: 24,
        fontWeight: '600',
        alignSelf: 'flex-end',
    },
    emptyMessageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyMessageText: {
        fontSize: 18,
        fontWeight: "400"
    }
});


export default styles