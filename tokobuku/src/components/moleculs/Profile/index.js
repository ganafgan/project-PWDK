import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Profile = (props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.borderProfile}>
                <TouchableOpacity onPress={props.navigation}>
                    <Image source={props.image} style={styles.img}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 110,
        height: 110,
        borderRadius: 110/2,
        
    },
    name: {
        fontSize: 20,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        marginTop: 20
    }
})
