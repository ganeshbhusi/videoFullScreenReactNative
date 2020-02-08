import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../../styles';

function Tab3Component2(props) {
    const {navigate} = props.navigation;
    return (
        <View>
            <TouchableOpacity
            onPress={()=>{
                console.log(navigate)
                navigate("TabOne")
            }}
            >
                <View style={styles.container}>
                    <Text style={styles.textOne}>
                        Go Tab1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Tab3Component2;
