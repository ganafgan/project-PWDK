import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button, Alert } from 'react-native'
import { HeaderMain } from '../../components';
import { colors, fonts } from './../../utils';
import { Gap } from './../../components/atoms'
import Axios from 'axios';
import { API_URL } from '../../supports/constants/urlApi';
import NumberFormat from 'react-number-format';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Wishlist = (props) => {

    const [data, setData] = useState(null)

    useEffect(()=>{getDataWishlist()},[])

    const getDataWishlist = () => {
        let id_user = 1  // //id user dummy nanti ambil dari redux

        Axios.get(API_URL+'wishlist/'+id_user)
        .then((res)=>{
            if(!res.data.error){
                setData(res.data.data)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const addToCart = () => {
        Alert.alert('Add to cart')
    }

    const deleteDataWishlist = (id) => {
        Axios.delete(API_URL+'wishlist/'+id)
        .then((res)=>{
            if(!res.data.error){
                Alert.alert('Delete Success')
                getDataWishlist()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    



    const renderWishlist = () => {
        return data.map((val)=>{
            return(
                <View key={val.id}>
                    <View style={styles.page}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail', {title : val.name, id : val.id_product})}>
                            <Image source={{uri:API_URL+val.url_image}} style={styles.img} />
                        </TouchableOpacity>
                        <View style={styles.content}>
                            <Text style={styles.title}>{val.name.length > 28 ? val.name.slice(0,20) + ' . . .' : val.name}</Text>
                            <Gap height={5} />
                            <Text style={styles.author}>{val.author}</Text>
                            <Gap height={20} />
                            <NumberFormat 
                                value={val.price} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} prefix={'Rp'} 
                                renderText={value=><Text style={styles.price}>{value}</Text>} />
                        </View>
                        <View style={styles.content2}>
                            <View style={{marginVertical:10}}><Button onPress={()=>addToCart()} title="Add To Cart" /></View>
                            <View style={{marginVertical:10}}><Button onPress={()=>deleteDataWishlist(val.id)} color='red' title="Delete" /></View>
                        </View>
                    </View>
                    <Gap height={20} />
                </View>
            )
        })
    }

    if(data === null){
        return(
            <View>
                <Text>Loading . . . </Text>
            </View>
        )
    }

    if(data.length === 0){
        return(
            <View>
                <Text>Loading . . . </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderMain button={true} style={styles.header} type='icon-only' title='Wishlist' />
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderWishlist()}
            </ScrollView>  

        </View>
        
        
    )
}

export default Wishlist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    page: {
        padding: 20,
        backgroundColor: colors.border,
        flexDirection: 'row'
    },
    content: {
        marginLeft: 20,
        flex:1,        
    },
    content2: {
        justifyContent:'center' 
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
