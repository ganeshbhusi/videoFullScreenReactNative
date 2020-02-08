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
                            Tab2Component1
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Tab2Component2
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Tab2Component3
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Tab2Page
