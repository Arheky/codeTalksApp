import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, value, onChangeText, isSecure}) => {
    return (
        <View style={styles.container}>
            <TextInput
             style={styles.input}
             value={value}
             onChangeText={onChangeText}
             placeholder={placeholder}
             placeholderTextColor='white'
             secureTextEntry={isSecure}
            />
        </View>
    )
}

export default Input;