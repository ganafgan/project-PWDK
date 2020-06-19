import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILWomen } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image source={ILWomen} style={styles.img} />
            </View>
            <Text style={styles.name}>Natalie White</Text>
        </View>
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
