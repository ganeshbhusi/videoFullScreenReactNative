import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

class Tab2Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <View>
                
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Study
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Classroom
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Tests
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Tab2Page
