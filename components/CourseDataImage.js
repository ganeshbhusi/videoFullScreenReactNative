import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, Keyboard, ScrollView, TextInput, ImageBackground, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import VideoFullScreenModal from './VideoFullScreenModal';
import Orientation from 'react-native-orientation-locker';

const CourseDataImage = (props) => {
    const [checkImage, setCheckImage] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const showToast = (videoUrl) => {
        if (videoUrl === undefined || videoUrl === null || videoUrl === "")
            ToastAndroid.show("No Video Available", ToastAndroid.TOP, ToastAndroid.SHORT)
        else {
            setShowModal(true)
        }
    }

    onCloseModalHere = () => {
        Orientation.lockToPortrait()
        setShowModal(false)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => showToast(props.data.videoUrl)}>
                {
                    checkImage && (
                        <ImageBackground
                            source={{ uri: props.data.videoThumbnail }}
                            style={ styles.imageStyle }
                            resizeMode={"cover"}
                            accessibilityLabel="Welcome Image"
                            onError={(e) => { setCheckImage(false) }}
                        >
                            <Icon name="play" size={30} style={{ color: '#ffee33' }} />
                        </ImageBackground>
                    )
                }
                {
                    !checkImage && (
                        <ImageBackground
                            source={{ uri: 'https://media.glassdoor.com/sqll/923744/vedantu-squarelogo-1561376805753.png' }}
                            style={ styles.imageStyle }
                        >
                            <Icon name="play" size={30} style={{ color: '#0a00ff' }} />
                        </ImageBackground>
                    )
                }
            </TouchableOpacity>
            <VideoFullScreenModal
                isVisible={showModal}
                onCloseModal={onCloseModalHere}
                videoUrl={props.data.videoUrl}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 272,
        height: 146,
        marginRight: 10,
        backgroundColor: "#d8d8d8"
    },
    imageStyle: {
        height: 146,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CourseDataImage;
