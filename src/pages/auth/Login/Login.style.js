import { StyleSheet } from "react-native";
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkorange,
    },
    title: {
        flex: 1,
        color: 'white',
        fontSize: 35,
        margin: 5,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})
