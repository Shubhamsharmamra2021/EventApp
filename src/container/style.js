import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    main: {
        textAlign: "center"

    },
    card: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
        overflow: "hidden",
        padding: 25,
        height: "100%"
    },


    headimg: {
        alignItems: "center",
        width: width * 1,
        height: height * 0.35,
        marginTop: 5

    },
    headh3: {
        zIndex: 2,
        fontWeight: "600",
        fontSize: 22,
        lineHeight: 30,
        marginLeft: 7,
        textAlign: "center"
    },
    inputIcon: {
        width: "100%",
        marginBottom: 35,
        marginTop: 10,
        textAlign: "center",
        justifyContent: "center"
    },
    inputField: {
        width: width * 0.9,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        paddingLeft: 20,
        fontSize: 16,
        borderWidth: 0,
        borderColor: "#cccccc",
        backgroundColor: "#ffffff",
        color: "#000000",
        borderStyle: "solid",
        borderRadius: 5,
        elevation: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 5
    },
    mainButton: {
        width: 300,
        borderRadius: 5,
        backgroundColor: "#21D393",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mainText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: '500'

    },
    error: {
        color: 'red'
    },
    showPassword: {
        position: 'absolute',
        right: 10,
        top: 20,
        color: 'blue'
    }
});

export const EventStyles = StyleSheet.create({
    headContainer: {
        backgroundColor: '#fff',
        paddingLeft: width * 0.08,
        padding: width * 0.04
    },
    headText1: {
        fontWeight: '600',
        fontSize: width * 0.06,
        lineHeight: width * 0.08,
    },
    headText2: {
        fontWeight: '400',
        fontSize: width * 0.04,
        lineHeight: width * 0.06,
    },
    mainCon: {
        backgroundColor: '#fff',
        marginTop: 15,
        marginHorizontal: 10,
        padding: 12,
        flexDirection: 'row',
        borderRadius: 12
    },
    eventImg: {
        width: width * 0.2,
        height: height * 0.1,
        borderRadius: 4
    },
    eventName: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24
    },
    eventDuration: {
        color: '#34A853',
        fontWeight: '500',
        fontSize: width * 0.03,
        opacity: 0.8,
        lineHeight: width * 0.04,
    },

    eventPrice: {
        color: '#828282',
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 18
    },
    eventCategoryCon: {
        backgroundColor: '#F5F7FC',
        borderRadius: 25,
    },
    eventCategoryText: {
        color: '#181A1F',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    logoutCon: {
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },
    logoutButton: {
        width: 300,
        borderRadius: 5,
        backgroundColor: "#21D393",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
    },
    logoutText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: '700'

    },
    eventCity: {
        color: '#828282',
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 18,
        marginRight: -5
    },
    IconArrowImg: {
        width: 14,
        height: 14,
        marginHorizontal: 5,
        marginBottom: 10
    },
    IconShareImg: {
        width: 16,
        height: 20,
        marginHorizontal: 10
    }
    , IconLikeImg: {
        width: 20,
        height: 18,
        marginHorizontal: 5
    }

})

export const DeviceStyles = StyleSheet.create({
    headContainer: {
        backgroundColor: '#fff',
        paddingLeft: width * 0.08,
        padding: width * 0.04,
    },
    headText1: {
        fontWeight: '600',
        fontSize: width * 0.06,
        lineHeight: width * 0.08,
    },
    headText2: {
        fontWeight: '400',
        fontSize: width * 0.04,
        lineHeight: width * 0.06,
    },
    mainCon: {
        alignContent: 'center',
        alignSelf: 'center'
    },
    eventImg: {
        width: width * 0.2,
        height: height * 0.1,
        borderRadius: 4
    },
    eventName: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24
    },
    eventDuration: {
        color: '#34A853',
        fontWeight: '500',
        fontSize: width * 0.03,
        opacity: 0.8,
        lineHeight: width * 0.04,
    },

    eventPrice: {
        color: '#828282',
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 18
    },
    eventCategoryCon: {
        backgroundColor: '#F5F7FC',
        borderRadius: 25,
    },
    eventCategoryText: {
        color: '#181A1F',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    logoutCon: {
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },
    logoutButton: {
        width: 300,
        borderRadius: 5,
        backgroundColor: "red",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
    },
    logoutText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: '700'

    },
    eventCity: {
        color: '#828282',
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 18,
        marginRight: -5
    },
    IconArrowImg: {
        width: 14,
        height: 14,
        marginHorizontal: 5,
        marginBottom: 10
    },
    IconShareImg: {
        width: 16,
        height: 20,
        marginHorizontal: 10
    },
    IconLikeImg: {
        width: 20,
        height: 18,
        marginHorizontal: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputIcon: {
        width: "100%",
        marginBottom: 35,
        marginTop: 10,
        textAlign: "center",
        justifyContent: "center"
    },
    inputField: {
        width: width * 0.9,
        marginTop: 20,
        marginBottom: 5,
        padding: 10,
        paddingLeft: 20,
        fontSize: 16,
        borderWidth: 0,
        borderColor: "#cccccc",
        backgroundColor: "#ffffff",
        color: "#000000",
        borderStyle: "solid",
        borderRadius: 5,
        elevation: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5
    },
    mainButton: {
        width: 300,
        borderRadius: 5,
        backgroundColor: "#21D393",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mainText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: '500'

    },
    attributeHeadCon: {
        backgroundColor: '#fff',
        paddingLeft: width * 0.08,
        paddingVertical: width * 0.04,
        flexDirection: 'row'
    },
    attributeText: {
        fontWeight: '700',
        fontSize: width * 0.04,
        lineHeight: width * 0.06,
        flex: 0.88
    },
    plusIconCon: {
        flex: 0.1,
        backgroundColor: '#21D393',
        padding: 4,
        borderRadius: 5,
        alignItems: 'center'
    },
    IconPlusImg: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    IconEditImg: {
        width: 25,
        height: 25,
        resizeMode: "contain",
        marginHorizontal: 5
    },
    IconEdit2Img: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginHorizontal: 5
    },
    attributeInputCon: {
        flexDirection: 'row',
        marginBottom: 20
    },
    serialNo: {
        fontWeight: '400',
        fontSize: width * 0.04,
        textAlignVertical: 'center',
        paddingTop: 10
    },
    inpuDatatFieldLable: {
        width: width * 0.35,
        marginLeft: 10,
        padding: 10,
        paddingLeft: 20,
        fontSize: 16,
        borderWidth: 0,
        borderColor: "#cccccc",
        backgroundColor: "#ffffff",
        color: "#000000",
        alignSelf: 'center',
        shadowRadius: 5,
    },
    inpuDatatField: {
        width: width * 0.35,
        marginLeft: 10,
        padding: 10,
        fontSize: 16,
        borderWidth: 0,
        borderColor: "#cccccc",
        backgroundColor: "#ffffff",
        color: "#000000",
        borderStyle: "solid",
        borderRadius: 5,
        elevation: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    emptyCon: {
        alignSelf: 'center',
        paddingVertical: 40
    },
    emptyText: {
        fontWeight: '400',
        fontSize: width * 0.045,
        lineHeight: width * 0.06,
        color: "#585A60"
    },
    IconCon: {
        justifyContent: 'center',
        marginLeft: 10
    },
    Hr:{
         backgroundColor: '#6B6C6F', height: 1  
    }
})