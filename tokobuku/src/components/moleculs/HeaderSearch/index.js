import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils'
import { Input } from '../../atoms'

const HeaderSearch = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Cari Buku Mu' />
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
    input: {
        backgroundColor: colors.white,
        width: 250,
        borderRadius: 10,
        padding: 10,
        fontSize: 14
    }
})
