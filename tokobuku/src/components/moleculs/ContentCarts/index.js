import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILBook1, IconMinusButton, IconPlusButton } from '../../../assets'
import { Button, Gap } from '../../atoms'
import { colors, fonts } from '../../../utils'

const ContentCarts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <Image source={ILBook1} style={styles.img} />
                <View style={styles.content}>
                    <Text style={styles.title}>Rahasia Wanita</Text>
                    <Gap height={5} />
                    <Text style={styles.author}>Giran Munggaran</Text>
                    <Gap height={20} />
                    <Text style={styles.price}>Rp 150.000</Text>
                </View>
                <View style={styles.content2}>
                    <IconMinusButton />
                    <Gap width={5} />
                    <Text>10</Text>
                    <Gap width={5} />
                    <IconPlusButton />
                </View>
            </View>
        </View>
    )
}

export default ContentCarts

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.white,
        flexDirection: 'row'
    },
    page: {
        padding: 20,
        backgroundColor: colors.border,
        flexDirection: 'row'
    },
    content: {
        marginLeft: 20,
    },
    content2: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 65
    },
    img: {
        height: 150,
        width: 100
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    author: {
        fontSize: 14,
        fontFamily: fonts.secondary[400],
        color: colors.text.secondary
    },
    price: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    btn: {
        height: 50,
        width: 50
    }
})
