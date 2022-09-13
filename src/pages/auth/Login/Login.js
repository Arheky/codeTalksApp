import React from 'react';
import {View, Text} from 'react-native';
import { Formik } from 'formik';
import { showMessage } from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import styles from './Login.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialValues = {
    usermail: '',
    password: '',
}

const Login = ({navigation}) => {
    const handleSignButton = () => {
        navigation.navigate('SignPage');
    }

    const handleFormSubmit = async formValues => {
        try {
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            showMessage({
                message: 'Giriş Yapıldı',
                type: 'success',
            })
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger',
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Code Talks</Text>
            <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
                {({values, handleChange, handleSubmit}) => (
                    <>
                        <Input
                         value={values.usermail}
                         onChangeText={handleChange('usermail')}
                         placeholder="e-postanızı giriniz.."
                        />
                        <Input
                         value={values.password}
                         onChangeText={handleChange('password')}
                         placeholder="şifrenizi giriniz.."
                         isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button theme="secondary" text="Kayıt Ol" onPress={handleSignButton} />
        </View>
    )
}

export default Login;
