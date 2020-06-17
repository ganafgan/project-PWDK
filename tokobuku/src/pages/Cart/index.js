import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NullCart, Header, ContentCart } from '../../components/'
import { colors } from '../../utils'


const Cart = () => {
    return (
        // Bagian Null Cart

        <View style={{flex: 1, backgroundColor: colors.white}}>
            <Header title='Cart' />
            <NullCart />
        </View>
        
        // Tinggal dibuat if else untuk tampilkan page apabila data cart telah di isi.

        // Bagian Content Cart

        // <View style={{flex: 1, backgroundColor: colors.white}}>
        //     <Header title='Cart' />
        //     <ContentCart />
        // </View>
    )
}

export default Cart;

const styles = StyleSheet.create({})
