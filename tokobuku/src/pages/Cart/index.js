import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ContentCarts, NullCarts, HeaderMain } from '../../components/'
import { colors } from '../../utils'

const Cart = () => { 
    return (
        <View style={styles.container}>
            <HeaderMain title='Cart' />
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
