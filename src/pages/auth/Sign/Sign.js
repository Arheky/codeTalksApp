import React from 'react';
import {View, Text} from 'react-native';
import { Formik } from 'formik';
import { showMessage } from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import styles from './Sign.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialValues = {
    usermail: '',
    password: '',
    repassword: '',
}

const Sign = ({navigation}) => {
    const handleGoBackButton = () => {
        navigation.goBack();
    }

    const handleFormSubmit = async formValues => {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler Uyuşmuyor',
                type: 'danger',
            })
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
                formValues.repassword,
            )
            showMessage({
                message: 'Kullanıcı Oluşturuldu',
                type: 'success',
            })
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'warning',
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Code Talks</Text>
            <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
                {({values ,handleChange, handleSubmit}) => (
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
                        <Input 
                         value={values.repassword}
                         onChangeText={handleChange('repassword')}
                         placeholder="şifrenizi tekrar giriniz.."
                         isSecure
                        />
                        <Button text="Kayıt Ol" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button theme="secondary" text="Geri" onPress={handleGoBackButton} />
        </View>
    )
}

export default Sign;