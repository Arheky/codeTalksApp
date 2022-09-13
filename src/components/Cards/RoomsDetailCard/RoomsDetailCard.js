import React from 'react';
import {View, Text} from 'react-native';
import { formatDistance, parseISO } from 'date-fns';
import {tr} from 'date-fns/locale';
import styles from './RoomsDetailCard.style';

const RoomsDetailCard = ({user}) => {
    const formattedDate = formatDistance(parseISO(user.date), new Date(), {
        addSuffix: true,
        locale: tr,
    })

    return (
        <View style={styles.container}>
            <View style={styles.info_container}>
                <Text style={styles.username}>{user.username}</Text>
                <Text>{formattedDate}</Text>
            </View>
            <View style={styles.message_container}>
                <Text style={styles.message}>{user.message}</Text>
            </View>
        </View>
    )
}

export default RoomsDetailCard;