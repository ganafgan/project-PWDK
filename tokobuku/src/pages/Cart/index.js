import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILTroli } from '../../assets'
import { colors, fonts } from '../../utils'
import { NullCart, Header, ContentCart, Button } from '../../components/'



const Cart = () => { 
    return (
        <View style={styles.container}>
            <Header title='Cart' />
            <NullCart />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
