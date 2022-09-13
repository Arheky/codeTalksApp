import { StyleSheet } from "react-native";
import colors from '../../styles/colors';

const base_style = StyleSheet.create({
    container: {
        backgroundColor: colors.brightorange,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default {
    primary: StyleSheet.create({
        ...base_style,
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
        },
        text: {
            ...base_style.text,
            color: colors.brightorange,
        },
    }) 
}