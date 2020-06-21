import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'
import { Input, Gap } from '../../atoms'
import { IconFavoriet, IconCart } from '../../../assets'
import Axios from 'axios'
import { API_URL } from '../../../supports/constants/urlApi'



const HeaderSearch = ({title, width, onChangeText, value, onPressFavorit}) => {
    // const [data, setData] = useState(null)

    // useEffect(()=>{getDataWishlist()},[])

    // const getDataWishlist = () => {
    //     let id_user = 1 

    //     Axios.get(API_URL + 'wishlist/' + id_user)
    //     .then((res)=>{
    //         if(!res.data.error){
    //             setData(res.data.data)
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

    // const renderWishlist = () => {
    //     return data.map((val)=>{
    //         return(               

    //             <View style={{flexDirection:"row",flex:1,justifyContent:'center', alignItems:'center'}}>
    //                 <IconFavoriet onPress={()=>props.navigation.navigate('Wishlist', {id : val.id})} />
    //                 <Gap width={5} />
    //                 <IconCart />
    //             </View>
                
    //         )
    //     })
    // }

    // if(data === null){
    //     return(
    //         <View>
    //             <Text>Loading . . . </Text>
    //         </View>
    //     )
    // }

    // if(data.length === 0){
    //     return(
    //         <View>
    //             <Text>Loading . . . </Text>
    //         </View>
    //     )
    // }
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.input(width)} placeholder={title} onChangeText={onChangeText} value={value} />
            <View style={{flexDirection:"row",flex:1,justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={onPressFavorit}>
                    <IconFavoriet />
                </TouchableOpacity>
                <Gap width={5} />
            </View>

            {/* {renderWishlist()} */}       
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
