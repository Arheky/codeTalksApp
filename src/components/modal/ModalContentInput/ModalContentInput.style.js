import {StyleSheet, Dimensions} from 'react-native';

const getSizeWindow = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: getSizeWindow.height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 5,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    input_container: {
        flex: 1,
        padding: 10,
    },
})