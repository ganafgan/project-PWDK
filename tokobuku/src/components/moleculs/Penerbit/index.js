import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'

const Penerbit = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.img} />
            <Text style={styles.penerbit}>{props.name}</Text>
        </View>
    )
}

export default Penerbit

const styles = StyleSheet.create({
    container: {
        padding: 12,
        alignSelf: 'flex-start',
        marginRight: 10,
        marginBottom : 20,
        width: 150,
        height: 130
    },
    img: {
      width: 120,
      height: 80,
      marginBottom: 15,
      resizeMode : "contain"
    },
    penerbit: {
        textAlign:'center',
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
