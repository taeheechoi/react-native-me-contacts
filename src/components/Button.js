import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({ title, disabled, loading, onPress }) => {
    const getBackGroundColor = () => {
        if (disabled) {
            return 'gray'
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.wrapper, { backgroundColor: getBackGroundColor() }]}>
            <View style={styles.loaderSection}>
            {loading && <ActivityIndicator color="blue"/>}
            {title && <Text style={{color: disabled ? 'black': 'white', paddingLeft: loading ? 5 :0}}>{title}</Text>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 42,
        paddingHorizontal: 5,
        marginVertical: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    loaderSection:{
        flexDirection: 'row'
    }

})

export default Button