import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ContentCarts, NullCarts } from '../../components/'
import { colors } from '../../utils'

const Cart = () => { 
    return (
        <View style={styles.container}>
            <ContentCarts />
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
