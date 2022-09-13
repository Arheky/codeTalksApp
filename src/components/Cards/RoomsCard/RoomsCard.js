import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './RoomsCard.style';

const RoomsCard = ({rooms, onPress}) => {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.room_name}>{rooms.roomname}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RoomsCard;