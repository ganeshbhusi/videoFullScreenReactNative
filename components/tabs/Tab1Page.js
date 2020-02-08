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
                    navigate("Tab1Comp1")
                }}>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Tab1Component1
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Tab1Component2
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.textOne}>
                            Tab1Component3
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Tab1Page
