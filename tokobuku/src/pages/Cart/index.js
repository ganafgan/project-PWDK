import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NullCart } from '../../components'
import { colors } from '../../utils'

const Cart = () => {
    return (
        <View style={styles.container}>
            <NullCart />
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
