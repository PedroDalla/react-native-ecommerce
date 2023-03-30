import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    cartTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartItemsContainer: {
        flex: 1,
        marginBottom: 20,
    },
    cartTotal: {
        fontSize: 20,
        fontWeight: 'bold',
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