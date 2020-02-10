import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import { styles } from '../styles';

class Tab1Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Modal
                    animationType="fade"
                    visible={this.state.modalVisible}
                    transparent={false}
                    onRequestClose={() => {
                        this.setState({ modalVisible: false })
                    }}
                    onDismiss={() => {
                        alert("closing the Modal")
                    }}
                >
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text>
                            This is my first modal
                        </Text>
                        <TouchableOpacity onPress={() => {
                            this.setState({ modalVisible: false })
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
                    this.setState({ modalVisible: true })
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
            </View>
        )
    }
}

export default Tab1Page
