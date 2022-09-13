import { StyleSheet } from "react-native";
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: colors.brightorange,
        padding: 10,
        margin: 10,
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
    },
})