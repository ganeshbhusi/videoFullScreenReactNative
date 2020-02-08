import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../../styles';
import { StackActions, NavigationActions } from 'react-navigation';

function Tab3Component2(props) {
    const {navigate} = props.navigation;
    const action = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: "Home"})
        ]
    })
    return (
        <View>
            <TouchableOpacity
            onPress={()=>{
                console.log(navigate)
                props.navigation.dispatch(action)
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
