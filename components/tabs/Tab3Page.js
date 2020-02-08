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
                            Tab3Component1
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigate("Tab3Comp2")
                }}>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Tab3Component2
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Tab3Component3
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Tab3Page
