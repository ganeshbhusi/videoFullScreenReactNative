import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { styles } from '../styles';
import DoubtModal from '../DoubtModal';
import CourseDataImage from '../CourseDataImage';

var dataVids = [
    {
        "videoUrl": "",
        "videoThumbnail": "https://vmkt.s3-ap-southeast-1.amazonaws.com/microcourses+/New+bundle+images/The+Living+Organisms+And+Their+Surroundings.jpg"
    },
    {
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "videoThumbnail": "https://vmkt.s3-ap-southeast-1.amazonaws.com/microcourses+/New+bundle+images/The+Living+Organisms+And+Their+Surrounding.jpg"
    },
    {
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "videoThumbnail": "https://vmkt.s3-ap-southeast-1.amazonaws.com/microcourses+/New+bundle+images/The+Living+Organisms+And+Their+Surroundings.jpg"
    },
    {
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
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

    getStudentDoubtText = (value) => {
        alert(value)
    }

    if (!Array.isArray(dataVids)) {
        return null
    }
    return (
        <View>
            {
                dataVids && Array.isArray(dataVids) && dataVids.length > 0 && (
                    <FlatList
                        data={dataVids}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={
                            ({ item }) => (
                                <CourseDataImage data={item} containerStyle={{width: 100}}/>
                            )
                        }
                        keyExtractor={(item,index) => index.toString()}
                    />
                )
            }

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
        </View>
    )
}


export default Tab1Page
