import React, { useEffect, useState } from 'react';
import { Modal, Button, View, Text, TouchableOpacity, StyleSheet, Keyboard, ScrollView, TextInput, Dimensions, ToastAndroid } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const { width, height } = Dimensions.get('window')

const VideoFullScreenModal = (props) => {
    const { isVisible, onCloseModal, videoUrl } = props;
    const [videoLoaded, setVideoLoaded] = useState(false);
    if (!isVisible) {
        return null
    }

    return (

        <Modal
            animationType="fade"
            visible={isVisible}
            transparent={true}
            onRequestClose={
                onCloseModal
            }
        >
            <View style={styles.container}>
                <Video
                    source={{ uri: videoUrl }}
                    controls
                    style={{ flex: 1, width: Dimensions.get("window").width, zIndex: 9999 }}
                    resizeMode={"contain"}
                    // fullscreen={false}
                    // fullscreenOrientation={"landscape"}
                    // paused={false}
                    // fullscreenAutorotate={true}
                    onLoad={() => {
                        setVideoLoaded(true)
                    }}
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
        justifyContent: 'center',
        height: Dimensions.get("window").height,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        zIndex: 0
        // transform: [{ rotate: '90deg' }],
    },
    video: {
        // flex: 1,
        width: Dimensions.get('window').width,
        // minHeight: "100%",
        // width,
        // height: 300,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})

export default VideoFullScreenModal;