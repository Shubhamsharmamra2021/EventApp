import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EventStyles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Event from '../component/Event'
import { useDispatch } from 'react-redux'
import { clearUserToken, setLoaderState } from '../redux/actions/userAction'

export default function EventListingScreen() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {

            let token = await AsyncStorage.getItem('UserToken')

            await axios.post('https://techeruditedev.xyz/projects/plie-api/public/api/events-listing', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
                .then(function (response) {

                    // console.log("Data",response.data.data.events);
                    let dataArray = response.data.data.events;
                    setData(dataArray)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {

                });
        }
        fetchData()
    }, [])

    const logout = async () => {
        try {
            dispatch(setLoaderState(true))
            await AsyncStorage.clear();
            await AsyncStorage.removeItem('UserToken')
            dispatch(clearUserToken(data.token));

            console.log('Clear Async')
        } catch (error) {
            console.log(error)
        }finally{
            dispatch(setLoaderState(false))
        }

    }
    const renderItem = (props) => (
        <Event props={props} />
    )

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'#000'} />
            <View style={EventStyles.headContainer}>
                <Text style={EventStyles.headText1}>Hello Renzo!</Text>
                <Text style={EventStyles.headText2}>Are you ready to dance?</Text>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
                ListFooterComponent={
                    <View style={EventStyles.logoutCon} >
                        <TouchableOpacity style={EventStyles.logoutButton} onPress={() => { logout() }}>
                            <Text style={EventStyles.logoutText}> LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        </SafeAreaView>
    )
}