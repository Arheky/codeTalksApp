import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 10,
        width: 180,
        height: 200,
        justifyContent: 'center',
    },
    room_name: {
        color: colors.brightorange,
        fontSize: 30,
        textAlign: 'center',
        alignItems: 'center',
    },
})