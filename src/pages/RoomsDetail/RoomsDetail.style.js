import { StyleSheet } from "react-native";
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.yellow,
    },
    room_name: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 5,
        marginTop: 10,
        marginHorizontal: 10,
        borderStyle: 'dotted',
        borderRadius: 10,
    },
})