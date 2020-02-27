import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Keyboard, ScrollView, TextInput } from 'react-native';

const DoubtModal = (props) => {
    const { isVisible, onCloseModal, getStudentDoubtText } = props;

    const [emailAddress, setEmailAddress] = useState("")
    const [question, setQuestion] = useState("")
    const [requiredEmail, setRequiredEmail] = useState(false);
    const [requiredQuestion, setRequiredQuestion] = useState(false)

    sendDataBack = () => {
        if(emailAddress===""){
            setRequiredEmail(true)
            return
        }else{
            setRequiredEmail(false)
        }
        
        if(question===""){
            setRequiredQuestion(true)
            return
        }else{
            setRequiredQuestion(false)
        }

        getStudentDoubtText(emailAddress, question)
    }

    return (
        <ScrollView onPress={
            Keyboard.dismiss
        }>
            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
                onRequestClose={
                    onCloseModal
                }
            >
                <View style={styles.mainView}>
                    <View style={styles.viewOne}>

                        <TouchableOpacity
                            onPress={onCloseModal}
                            style={styles.closeModalView}>
                            <View>
                                <Text style={styles.closeModalText}>
                                    X
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.questionText1}>
                            <Text style={styles.questionText}>
                                Have a question?
                            </Text>
                        </View>

                        <View style={styles.questionPost1}>
                            <Text style={styles.questionPost}>
                                Email address
                            </Text>
                        </View>
                        <TextInput
                            value={emailAddress}
                            onChangeText={value => setEmailAddress(value)}
                            placeholder="eg. xyz@abc.om"
                            style={styles.textInputTwo}
                        />
                        <Text>
                            {
                                requiredEmail && (
                                    <Text style={styles.requiredThings}>Required!!!</Text>
                                )
                            }
                        </Text>

                        <View style={styles.questionPost1}>
                            <Text style={styles.questionPost}>
                                Post your question
                            </Text>
                        </View>
                        <TextInput
                            multiline={true}
                            numberOfLines={5}
                            value={question}
                            onChangeText={value => setQuestion(value)}
                            placeholder="Type here.."
                            style={styles.textInputOne}
                        />
                        <Text>
                            {
                                requiredQuestion && (
                                    <Text style={styles.requiredThings}>Required!!!</Text>
                                )
                            }
                        </Text>

                        <TouchableOpacity onPress={
                            sendDataBack
                        }>
                            <View style={styles.submitView}>
                                <Text style={styles.submitText}>
                                    SUBMIT
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
    },
    viewOne: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 2,
        padding: 20
    },
    questionText: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        lineHeight: 28,
        color: "#222222",
        fontWeight: 'bold'
    },
    questionText1: {
        marginBottom: 28
    },
    questionPost: {
        fontSize: 14,
        lineHeight: 20,
        color: "#222222",
        fontWeight: 'bold'
    },
    questionPost1: {
        marginBottom: 10
    },
    textInputOne: {
        borderColor: '#cccccc',
        backgroundColor: 'white',
        borderColor: '#e8ebe9',
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        textAlignVertical: 'top'
    },
    textInputTwo: {
        borderColor: '#e8ebe9',
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        fontSize: 14
        // padding: 10,
        // textAlignVertical: 'top'
    },
    submitView: {
        alignItems: 'flex-end',
    },
    submitText: {
        color: '#ff6200',
        fontSize: 16,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    closeModalView: {
        backgroundColor: 'white',
        position: 'absolute',
        right: -15,
        top: -20,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    closeModalText: {
        width: 11,
        height: 20,
        fontSize: 16,
        color: '#ff6200',
        fontWeight: 'bold'
    },
    requiredThings: {
        color: 'red'
    }
})
export default DoubtModal;
