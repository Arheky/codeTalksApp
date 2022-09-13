import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import database from '@react-native-firebase/database';

import styles from './Rooms.style';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ModalContentInput from '../../components/modal/ModalContentInput/ModalContentInput';
import parseContentData from '../../utils/parseContentData';
import RoomsCard from '../../components/Cards/RoomsCard/RoomsCard';

const Rooms = ({navigation}) => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        database()
         .ref('rooms/')
         .on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {});
            setRoomList(parsedData);
         });
    }, []);

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible);
    }

    const handleSendContent = content => {
        handleInputToggle();
        sendContent(content);
        showMessage({
            message: 'Oda Oluşturuldu',
            type: 'success',
        });
    };
    const sendContent = content => {
        const contentObject = {
            roomname: content,
        };
        database().ref('rooms/').push(contentObject);
    };

    handleRoomsDetail = item => {
        navigation.navigate('RoomsDetailPage', {item});
    };

    const renderRoomList = ({item}) => (
        <RoomsCard rooms={item} onPress={() => handleRoomsDetail(item)} />
    );

    return (
        <View style={styles.container}>
            <FlatList data={roomList} renderItem={renderRoomList} numColumns="2" />
            <FloatingButton icon="add" onPress={handleInputToggle} />
            <ModalContentInput
             visible={inputModalVisible}
             onClose={handleInputToggle}
             onSend={handleSendContent}
             placeholder="Oluşturmak istediğiniz odanın adını giriniz.."
            />
        </View>
    )
}

export default Rooms;