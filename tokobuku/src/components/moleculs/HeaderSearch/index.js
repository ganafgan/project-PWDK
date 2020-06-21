import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'
import { Input, Gap } from '../../atoms'
import { IconFavoriet, IconCart } from '../../../assets'
import Axios from 'axios'
import { API_URL } from '../../../supports/constants/urlApi'


const HeaderSearch = ({title, width, onChangeText, value, onPressFavorite}) => {
    

    
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.input(width)} placeholder={title} onChangeText={onChangeText} value={value} />
            <View style={{flexDirection:"row",flex:1,justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={onPressFavorite} >
                    <IconFavoriet />
                </TouchableOpacity>
                <Gap width={5} />
                <IconCart />
            </View>            
        </View>
    )
}

export default HeaderSearch

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection:"row"
    },
    input: (width) => ({
        backgroundColor: colors.white,
        width: width,
        borderRadius: 10,
        padding: 10,
        fontSize: 14
    })
})
