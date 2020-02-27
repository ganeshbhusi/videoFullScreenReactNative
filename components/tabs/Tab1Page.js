import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, FlatList, Dimensions } from 'react-native';
import { styles } from '../styles';
import DoubtModal from '../DoubtModal';
import CourseDataImage from '../CourseDataImage';
import Video from 'react-native-video';

var dataVids = [
    {
        "videoUrl": "",
        "videoThumbnail": "https://vmkt.s3-ap-southeast-1.amazonaws.com/microcourses+/New+bundle+images/The+Living+Organisms+And+Their+Surroundings.jpg"
    },
    {
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "videoThumbnail": "https://vmkt.s3-ap-southeast-1.amazonaws.com/microcourses+/New+bundle+images/The+Living+Organisms+And+Their+Surroundings.jpg"
    },
    {
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "videoThumbnail": "https://vmkt.s3-ap-southeast-1.amazonaws.com/microcourses+/New+bundle+images/The+Living+Organisms+And+Their+Surroundings.jpg"
    }
];

// var dataVids = {name: "hi"};

const Tab1Page = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modal1Visible, setModal1Visible] = useState(false);

    const { navigate } = props.navigation

    onCloseModalHere = () => {
        setModal1Visible(false)
    }

    getStudentDoubtText = (email, question) => {
        alert(email + " , " + question)
    }

    if (!Array.isArray(dataVids)) {
        return null
    }
    return (
        <View>
            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={false}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text>
                        This is my first modal
                    </Text>
                    <Video
                        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }}
                        controls={true}
                        style={{ flex: 1, width: Dimensions.get("window").width }}
                        resizeMode={"contain"}
                        fullscreen={false}
                        fullscreenOrientation={"landscape"}
                        paused={false}
                        fullscreenAutorotate={true}
                        onEnd={() => {
                            // ToastAndroid.show("Video Completed", ToastAndroid.SHORT)
                            // onCloseModal()
                        }}
                        onError={() => {
                            // ToastAndroid.show("Error while playing video", ToastAndroid.SHORT)
                            // onCloseModal()
                        }
                        }
                    />
                    <TouchableOpacity onPress={() => {
                        setModalVisible(false)
                    }}>
                        <View style={styles.container, styles.active}>
                            <Text style={styles.textOne}>
                                Close Modal
                                </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>


            {/* <Video
                source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }}
                controls={true}
                style={{width: Dimensions.get("window").width, height: 200}}
                resizeMode={"stretch"}
                fullscreen={false}
                fullscreenOrientation={"landscape"}
                paused={true}
                fullscreenAutorotate={true}
                onEnd={() => {
                    // ToastAndroid.show("Video Completed", ToastAndroid.SHORT)
                    // onCloseModal()
                }}
                onError={() => {
                    // ToastAndroid.show("Error while playing video", ToastAndroid.SHORT)
                    // onCloseModal()
                }
                }
            /> */}

            <TouchableOpacity onPress={() => {
                navigate("Profile")
            }}>
                <View style={styles.container, styles.active}>
                    <Text style={styles.textOne}>
                        Open Profile
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setModalVisible(true)
            }}>
                <View style={styles.container, styles.active2}>
                    <Text style={styles.textOne}>
                        Open Modal
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.textOne}>
                        Ask Doubts
                        </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModal1Visible(true)}>
                <View style={styles.container}>
                    <Text style={styles.textOne}>
                        Ask Question Modal
                    </Text>
                </View>
            </TouchableOpacity>

            <DoubtModal
                isVisible={modal1Visible}
                onCloseModal={onCloseModalHere}
                getStudentDoubtText={getStudentDoubtText}
            />

            {
                dataVids && Array.isArray(dataVids) && dataVids.length > 0 && (
                    <FlatList
                        data={dataVids}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={
                            ({ item }) => (
                                <CourseDataImage data={item} />
                            )
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                )
            }
        </View>
    )
}


export default Tab1Page
