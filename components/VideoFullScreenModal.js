import React, { useEffect, useState } from 'react';
import { Modal, Button, View, Text, TouchableOpacity, StyleSheet, Keyboard, ScrollView, TextInput, Dimensions, ToastAndroid } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const { width, height } = Dimensions.get('window')

const VideoFullScreenModal = (props) => {
    const { isVisible, onCloseModal, videoUrl } = props;

    const [videoRef, setVideoRef] = useState("")

    // useEffect(() => {
    //     if (videoRef !== null && videoRef !== "") {
    //         // videoRef.presentFullscreenPlayer()
    //     }
    // }, [videoRef])

    useEffect(() => {
        if (videoRef !== null && videoRef !== "") {
            console.log("change orientation");
            // Orientation.lockToLandscape();
        }

        return () => {
            // Orientation.lockToPortrait()
        }
    }, [videoRef])

    return (
        <Modal
            animationType="fade"
            visible={isVisible}
            transparent={false}
            onRequestClose={
                onCloseModal
            }
        >
            <View style={styles.container}>
                <Video
                    source={{ uri: videoUrl }}
                    ref={(ref) => {
                        setVideoRef(ref)
                    }}
                    controls={true}
                    style={styles.video}
                    resizeMode={"cover"}
                    // fullscreen={true}
                    // fullscreenOrientation={"portrait"}
                    paused={false}
                    // fullscreenAutorotate={true}
                    onEnd={() => {
                        ToastAndroid.show("Video Completed", ToastAndroid.SHORT)
                        onCloseModal()
                    }}
                    onError={() => {
                        ToastAndroid.show("Error while playing video", ToastAndroid.SHORT)
                        onCloseModal()
                    }
                    }
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
        // transform: [{ rotate: '90deg' }],
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
    },
    video: {
        // flex: 1,
        // width: Dimensions.get('window').height,
        // height: Dimensions.get('window').width,
        // minHeight: "100%",
        width,
        height: 300,
        backgroundColor: 'black',
    }
})

export default VideoFullScreenModal;