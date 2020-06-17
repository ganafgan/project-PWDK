import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILTroli } from '../../../assets'
import { Button } from '../../../components'
import { colors, fonts  } from '../../../utils'

const NullCart = () => {
    return ( 
            <View style={styles.content}>
                <View style={styles.troli}>
                    <View style={styles.gambarWrapper}>
                        <Image source={ILTroli} style={styles.gambar} />
                    </View>
                    <Text style={styles.judul}>Sayang Sekali Keranjang Belanjamu Kosong</Text>
                    <Text style={styles.info}>Silahkan lakukan pemesanan Buku yang kamu inginkan untuk melanjutkan transaksi</Text>
                </View>
                <View>
                    <Button title='Order a Book' />                    
                </View> 
            </View>      
    )
}

export default NullCart;

const styles = StyleSheet.create({
    
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent:'space-between',
        paddingBottom: 50
    }, 
    troli: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    } ,
    gambar: {
        width: 110,
        height: 110
    },
    gambarWrapper: {
        width: 130,
        height: 130,        
    },    
    judul: {
        fontSize: 15,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    info: {
        fontSize: 13,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary
    }
})

