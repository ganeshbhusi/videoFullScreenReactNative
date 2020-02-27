import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, Keyboard, ScrollView, TextInput, ImageBackground, ToastAndroid } from 'react-native';
import { styles } from './styles';
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
        <View style={{ width: 200, height: 100, paddingLeft: 10 }}>
            <TouchableOpacity onPress={() => showToast(props.data.videoUrl)}>
                {
                    checkImage && (
                        <ImageBackground
                            source={{ uri: props.data.videoThumbnail }}
                            style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}
                            resizeMode={"contain"}
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
                            style={{ height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}
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

export default CourseDataImage;
