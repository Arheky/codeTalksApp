import { StyleSheet } from "react-native";
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    info_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        colors: colors.brightorange,
    },
    message_container: {
        paddingTop: 10,
    },
    message: {
        fontWeight: '500',
        fontSize: 14,
        color: 'black',
    },
})