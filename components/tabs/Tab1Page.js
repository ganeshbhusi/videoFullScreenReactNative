import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

class Tab1Page extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>

                <TouchableOpacity onPress={() => {
                    navigate("Profile")
                }}>
                    <View style={styles.container, styles.active}>
                        <Text style={styles.textOne}>
                            Open Profile
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            My Courses
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
