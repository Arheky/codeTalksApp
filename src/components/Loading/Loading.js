import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size="large" color={colors.brightorange} />
        </View>
    )
}

export default Loading;