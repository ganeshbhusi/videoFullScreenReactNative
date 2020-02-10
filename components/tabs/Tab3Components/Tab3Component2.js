import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import { StackActions, NavigationActions } from 'react-navigation';

function Tab3Component2(props) {
    const { navigate } = props.navigation;
    const action = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: "Home"})
            // NavigationActions.navigate("NewsFeed")
        ]
    })
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.dispatch(action)
                }}
            >
                <View style={styles.container, styles.active}>
                    <Text style={styles.textOne}>
                        Go Home
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Tab3Component2;
