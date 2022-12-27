import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const { height, width }= Dimensions.get('window');
const LOADER = require('../assets/loader.json')
 const MainLoader = () => {
    return (
        <>
            <View style={styles.mainView}>
            </View>
            <View style={styles.innerview}>
                <LottieView source={LOADER} autoPlay loop />
            </View>
        </>

    );
};

export default MainLoader;

const styles = StyleSheet.create({
    innerview: {
        position: 'absolute', left: width * 0.05, top: height * 0.35, flex: 4, zIndex: 40,
        borderRadius: 15, width: width * 0.9, height: height * 0.3
    },
    mainView: { position: 'absolute', flex: 1, top: 0, left: 0, width: '100%', height: '100%', 
    zIndex: 2, backgroundColor: '#000', opacity: 0.7 }
});
