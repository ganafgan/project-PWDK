import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { ILBook1, IconPlusButton, IconMinusButton } from '../../../assets'
import { Button } from '../../../components'
import { colors, fonts  } from '../../../utils'
var { width } = Dimensions.get("window")

const ContentCart = () => {
    return ( 
        <View style={styles.content}>
            <Image source={ILBook1} style={styles.gambar} /> 
            <View style={{marginTop:-15, paddingRight:30, paddingLeft:10}}>
                <Text style={styles.title}>Rahasia Wanita</Text>
                <Text style={styles.author}>Giran Munggaran</Text>
                <Text style={styles.price}>Rp 150.000</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center'}}>
                <IconMinusButton /> 
                <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:13}}>10</Text>                
                <IconPlusButton />
            </View>  
            
        </View>      
    )
}

export default ContentCart;

const styles = StyleSheet.create({
    
    content: {
        width:width-20,
        margin:10,
        backgroundColor:'transparent', 
        flexDirection:'row', 
        borderBottomWidth:2, 
        borderColor:"#cccccc", 
        paddingBottom:10,
       
    },
    gambar: {
        width: 130,
        height: 150,        
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        marginTop: 10,
        marginBottom: 5,
        color: colors.text.primary
    },
    author: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        marginBottom: 10,
        color: colors.text.secondary
    },
    price: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        marginBottom: 10,
        color: colors.text.primary
    }
})

