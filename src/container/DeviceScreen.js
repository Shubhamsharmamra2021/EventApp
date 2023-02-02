import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, FlatList, TextInput, Image, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DeviceStyles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Event from '../component/Event'
import { useDispatch } from 'react-redux'
import { clearUserToken, setLoaderState } from '../redux/actions/userAction'

export default function DeviceScreen() {
    const [data, setData] = useState([])
    const [deviceId, setDeviceId] = useState("48ec6910-a25b-11ed-b62c-7d8052ad39cf")
    const [serverAttribute, setServerAttribute] = useState([])
    const [sharedAttribute, setSharedAttribute] = useState([])
    const [clientAttribute, setClientAttribute] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        dispatch(setLoaderState(true))
        try {
            let token = await AsyncStorage.getItem('@User_Token')
            console.log(token)
            await axios.get('https://demo.thingsboard.io/api/plugins/telemetry/DEVICE/' + deviceId + '/values/attributes/SERVER_SCOPE', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                //console.log("Data", response.data);
                let dataArray = response.data;
                setServerAttribute(dataArray)
            }) 

            await axios.get('https://demo.thingsboard.io/api/plugins/telemetry/DEVICE/' + deviceId + '/values/attributes/SHARED_SCOPE', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                //console.log("Data", response.data);
                let dataArray = response.data;
                setSharedAttribute(dataArray)
            }) 

            await axios.get('https://demo.thingsboard.io/api/plugins/telemetry/DEVICE/' + deviceId + '/values/attributes/CLIENT_SCOPE', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                //console.log("Data", response.data);
                let dataArray = response.data;
                setClientAttribute(dataArray)
            }) 
        } catch (exp) {
            Alert.alert(
                'Error : ' + JSON.stringify(exp.message),
            )
        } finally {
            dispatch(setLoaderState(false))

        }





    }

    const logout = async () => {
        try {
            dispatch(setLoaderState(true))
            await AsyncStorage.clear();
            await AsyncStorage.removeItem('UserToken')
            dispatch(clearUserToken(data.token));

            console.log('Clear Async')
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoaderState(false))
        }

    }

    const addAttribute = (type) => {
        let dataType = type ? serverAttribute : sharedAttribute

        let attributes = []
        attributes.push(...dataType)
        console.log(attributes, "Attribute")
        attributes.push({ key: "", value: "", isEdit: "N" })
        type ? setServerAttribute(attributes) : setSharedAttribute(attributes)
    }

    const removeAttribute = (type, index) => {
        let dataType = type ? serverAttribute : sharedAttribute

        let attributes = []
        attributes.push(...dataType)
        if (index > -1) {
            attributes.splice(index, 1);
        }
        type ? setServerAttribute(attributes) : setSharedAttribute(attributes)
    }

    const updateAttribute = (attibuteType, isKey, index, data,) => {
        let dataType = attibuteType ? serverAttribute : sharedAttribute

        let attributes = []
        attributes.push(...dataType)
        let element = attributes[index]

        let obj = {
            isEdit: element?.isEdit,
            key: isKey ? data : element?.key,
            value: isKey ? element?.value : data
        }

        const insert = (arr, index, newItem) => [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ]

        const result = insert(attributes, index, obj)
        console.log(result)

        attibuteType ? setServerAttribute(result) : setSharedAttribute(result)
    }

    const editAttributeValue = (type, isEdit, index) => {
        let dataType = type ? serverAttribute : sharedAttribute

        let attributes = []
        attributes.push(...dataType)
        let element = attributes[index]
        let obj = isEdit ? {
            isEdit: "X",
            key: element?.key,
            value: element?.value
        } : {
            key: element?.key,
            value: element?.value
        }
        const insert = (arr, index, newItem) => [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ]
        const result = insert(attributes, index, obj)

        type ? setServerAttribute(result) : setSharedAttribute(result)
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }} >
            <StatusBar backgroundColor={'#000'} />
            <ScrollView>

                <View style={DeviceStyles.headContainer}>
                    <Text style={DeviceStyles.headText1}>Hello Developer!</Text>
                    <Text style={DeviceStyles.headText2}>Are you ready to rock in IOT?</Text>
                </View>

                <View style={DeviceStyles.mainCon}>
                    <View style={DeviceStyles.Hr} ></View>
                    <TextInput
                        value={deviceId}
                        onChangeText={(e) => setDeviceId(e)}
                        placeholder="Enter Device ID"
                        placeholderTextColor="#C4C4C4"
                        style={DeviceStyles.inputField}
                    />
                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                        <TouchableOpacity style={DeviceStyles.mainButton} onPress={() => { fetchData() }}>
                            <Text style={DeviceStyles.mainText}  >Get Device</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={DeviceStyles.Hr} ></View>

                    <View style={DeviceStyles.attributeHeadCon}>
                        <Text style={DeviceStyles.attributeText}>Server Attributes</Text>
                        <View style={DeviceStyles.plusIconCon}>
                            <TouchableOpacity onPress={() => {
                                addAttribute(true)
                            }}>
                                <Image
                                    style={DeviceStyles.IconPlusImg}
                                    source={require('../assets/plus.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        {serverAttribute.length > 0 ?
                            serverAttribute.map((item, index) => <View key={index} style={DeviceStyles.attributeInputCon}>
                                <Text style={DeviceStyles.serialNo}>{index + 1}.</Text>
                                {item?.isEdit == "N" ?
                                    <TextInput
                                        value={item?.key}
                                        onChangeText={(e) => updateAttribute(true, true, index, e)}
                                        placeholder="Attribute Name"
                                        placeholderTextColor="#C4C4C4"
                                        multiline
                                        style={DeviceStyles.inpuDatatField}
                                    /> : <Text style={DeviceStyles.inpuDatatFieldLable}> {item?.key}</Text>
                                }
                                {item?.isEdit == "N" || item?.isEdit == "X" ?
                                    <TextInput
                                        value={item?.value}
                                        onChangeText={(e) => updateAttribute(true, false, index, e)}
                                        placeholder="Attribute Value"
                                        placeholderTextColor="#C4C4C4"
                                        multiline
                                        style={DeviceStyles.inpuDatatField}
                                    /> : <Text style={DeviceStyles.inpuDatatFieldLable}> {item?.value} </Text>
                                }
                                {
                                    item?.isEdit == "N" ? <TouchableOpacity
                                        onPress={() => { removeAttribute(true, index) }}
                                        style={DeviceStyles.IconCon}>
                                        <Image
                                            style={DeviceStyles.IconPlusImg}
                                            source={require('../assets/delete.png')} />
                                    </TouchableOpacity> :
                                        item?.isEdit == "X" ? <TouchableOpacity
                                            style={DeviceStyles.IconCon}
                                            onPress={() => {
                                                editAttributeValue(true, false, index)
                                            }} >
                                            <Image
                                                style={DeviceStyles.IconEdit2Img}
                                                source={require('../assets/edit2.png')}
                                            />
                                        </TouchableOpacity>
                                            : <TouchableOpacity
                                                style={DeviceStyles.IconCon}
                                                onPress={() => {
                                                    editAttributeValue(true, true, index)
                                                }}  >
                                                <Image
                                                    style={DeviceStyles.IconEditImg}
                                                    source={require('../assets/edit.png')} />
                                            </TouchableOpacity>
                                }
                            </View>) :
                            <View style={DeviceStyles.emptyCon}>
                                <Text style={DeviceStyles.emptyText} >Not found any server attribute</Text>
                            </View>
                        }
                    </View>

                    <View style={DeviceStyles.Hr} ></View>

                    <View style={DeviceStyles.attributeHeadCon}>
                        <Text style={DeviceStyles.attributeText}>Shared Attributes</Text>
                        <View style={DeviceStyles.plusIconCon}>
                            <TouchableOpacity
                                onPress={() => {
                                    addAttribute(false)
                                }}>
                                <Image
                                    style={DeviceStyles.IconPlusImg}
                                    source={require('../assets/plus.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        {sharedAttribute.length > 0 ?
                            sharedAttribute.map((item, index) => <View key={index} style={DeviceStyles.attributeInputCon}>
                                <Text style={DeviceStyles.serialNo}>{index + 1}.</Text>
                                {item?.isEdit == "N" ?
                                    <TextInput
                                        value={item?.key}
                                        onChangeText={(e) => updateAttribute(false, true, index, e)}
                                        placeholder="Attribute Name"
                                        placeholderTextColor="#C4C4C4"
                                        multiline
                                        style={DeviceStyles.inpuDatatField}
                                    /> : <Text style={DeviceStyles.inpuDatatFieldLable}> {item?.key}</Text>
                                }
                                {item?.isEdit == "N" || item?.isEdit == "X" ?
                                    <TextInput
                                        value={item?.value}
                                        onChangeText={(e) => updateAttribute(false, false, index, e)}
                                        placeholder="Attribute Value"
                                        placeholderTextColor="#C4C4C4"
                                        multiline
                                        style={DeviceStyles.inpuDatatField}
                                    /> : <Text style={DeviceStyles.inpuDatatFieldLable}> {item?.value} </Text>
                                }
                                {item?.isEdit == "N" ? <TouchableOpacity onPress={() => { removeAttribute(false, index) }}
                                    style={DeviceStyles.IconCon}>
                                    <Image
                                        style={DeviceStyles.IconPlusImg}
                                        source={require('../assets/delete.png')}
                                    /></TouchableOpacity> : item?.isEdit == "X" ? <TouchableOpacity
                                        style={DeviceStyles.IconCon}
                                        onPress={() => {
                                            editAttributeValue(false, false, index)
                                        }}  >
                                        <Image
                                            style={DeviceStyles.IconEdit2Img}
                                            source={require('../assets/edit2.png')}
                                        />
                                    </TouchableOpacity>
                                    : <TouchableOpacity
                                        style={DeviceStyles.IconCon}
                                        onPress={() => {
                                            editAttributeValue(false, true, index)
                                        }} >
                                        <Image
                                            style={DeviceStyles.IconEditImg}
                                            source={require('../assets/edit.png')}
                                        />
                                    </TouchableOpacity>
                                }
                            </View>) :
                            <View style={DeviceStyles.emptyCon}>
                                <Text style={DeviceStyles.emptyText} >Not found any shared attribute</Text>
                            </View>
                        }
                    </View>


                    <View style={DeviceStyles.Hr} ></View>

                    <View style={DeviceStyles.attributeHeadCon}>
                        <Text style={DeviceStyles.attributeText}>Client Attributes</Text>
                    </View>

                    <View>
                        {clientAttribute.length > 0 ?
                            clientAttribute.map((item, index) => <View key={index} style={DeviceStyles.attributeInputCon}>
                                <Text style={DeviceStyles.serialNo}>{index + 1}.</Text>
                                <Text style={DeviceStyles.inpuDatatFieldLable}> {item?.key}</Text>
                                <Text style={DeviceStyles.inpuDatatFieldLable}> {item?.value} </Text>
                            </View>) :
                            <View style={DeviceStyles.emptyCon}>
                                <Text style={DeviceStyles.emptyText} >Not found any client attribute</Text>
                            </View>
                        }
                    </View>


                    <View style={DeviceStyles.logoutCon} >
                        <TouchableOpacity style={DeviceStyles.logoutButton} onPress={() => { logout() }}>
                            <Text style={DeviceStyles.logoutText}> LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}