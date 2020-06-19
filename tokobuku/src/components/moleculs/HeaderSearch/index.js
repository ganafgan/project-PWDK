import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils'
import { Input } from '../../atoms'

const HeaderSearch = ({title, width, onChangeText, value}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input(width)} placeholder={title} onChangeText={onChangeText} value={value} />
            <View></View>
        </View>
    )
}

export default HeaderSearch

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    input: (width) => ({
        backgroundColor: colors.white,
        width: width,
        borderRadius: 10,
        padding: 10,
        fontSize: 14
    })
})
