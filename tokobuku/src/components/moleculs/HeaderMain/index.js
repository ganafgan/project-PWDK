import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const HeaderMain = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default HeaderMain

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.primary[600]
    }
})
