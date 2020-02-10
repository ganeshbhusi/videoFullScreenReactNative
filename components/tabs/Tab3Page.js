import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

class Tab3Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Page Settings
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigate("Profile")
                }}>
                    <View style={styles.container, styles.active}>
                        <Text style={styles.textOne}>
                            Profile
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Tab3Page
