import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import { loginStyles } from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setLoaderState, setUserToken } from '../redux/actions/userAction';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const dispatch = useDispatch()

    const ValidateForm = () => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passwordformat = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

        if (Email.length > 1) {
            setEmailError('')
            if (Email.match(mailformat)) {
                setEmailError('')
            } else {
                setEmailError('Email is not validate')
            }
        } else {
            setEmailError('Email field is not Emply')
        }

        if (Password.length > 1) {
            setPasswordError('')
            if (Password.match(passwordformat)) {
                setEmailError('')
                setPasswordError('')
                return true
            }
            else {
                setPasswordError('Password is not validate')
                return false
            }
        } else {
            setPasswordError('Password field is not Emply')
            return false
        }

    }
    const SignIn = () => {
        dispatch(setLoaderState(true))
        const valid = ValidateForm()
        if (valid == true) {
            console.log('Email : ' + Email + '  Password : ' + Password)
            axios.post('https://demo.thingsboard.io/api/auth/login', {
                username: Email,
                password: Password
            })
                .then(async function (response) {
                    console.log(response.data.token);
                    let data = response.data

                    if (data.token) {
                        await AsyncStorage.setItem(
                            '@User_Token', data.token
                        );
                        dispatch(setUserToken(data.token));
                    }
                })
                .catch(function (error) {
                    Alert.alert(
                        'Error : '+ error,
                    ),
                        console.log(error);
                }).finally(() => {
                    dispatch(setLoaderState(false))
                })
        } else {
            dispatch(setLoaderState(false))
        }
    }


    return (
        <SafeAreaView style={loginStyles.container}>
            <StatusBar backgroundColor={'#000'} />
            <View style={{ paddingTop: height * 0.15 }}>
                <Image
                    style={loginStyles.headimg}
                    source={require('../assets/banner.jpg')}
                />
            </View>
            <View style={loginStyles.main}>
                <View style={loginStyles.card}>

                    <View style={loginStyles.inputIcon}>
                        <Text>Email</Text>
                        <TextInput
                            value={Email}
                            onChangeText={(e) => setEmail(e)}
                            placeholder="email@email.com"
                            placeholderTextColor="#C4C4C4"
                            style={loginStyles.inputField}
                        />
                        {emailError && <Text style={loginStyles.error} >{emailError}</Text>}
                        <Text style={{ marginTop: 20 }} >Password</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                value={Password}
                                onChangeText={(e) => setPassword(e)}
                                placeholder="Password"
                                placeholderTextColor="#C4C4C4"
                                secureTextEntry={showPass ? false : true}
                                style={loginStyles.inputField}
                            />
                            <TouchableOpacity onPress={() => {
                                setShowPass(!showPass)
                            }}>
                                <Text style={loginStyles.showPassword}>{showPass ? 'hide' : 'show'}</Text>

                            </TouchableOpacity>
                        </View>

                        {passwordError && <Text style={loginStyles.error}>{passwordError}</Text>}
                    </View>
                    <TouchableOpacity style={loginStyles.mainButton} onPress={() => { SignIn() }}>
                        <Text style={loginStyles.mainText}  >Sign In</Text>
                    </TouchableOpacity>



                </View>
            </View>
        </SafeAreaView>
    );
}

// email: 'testpracticaluser001@mailinator.com',
// password: 'Test@123'

// {
//  s.shubham+iot@tftus.com
//     Shubhuiot@123
// } 