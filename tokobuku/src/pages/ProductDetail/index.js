import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { colors } from '../../utils';
import { HeaderMain, ProductDetailContent } from '../../components';
import Axios from 'axios';
import { API_URL } from '../../supports/constants/urlApi';

const ProductDetail = (props) => {
    
    const [data, setData] = useState(null)
    const [qty, setQty] = useState(1)

    useEffect(()=>{getData()},[])
    
    const onPlusQtyHandler = () => {
        qty < data[0].stock ? setQty(qty + 1) : data[0].stock
    }

    const onMinQtyHandler = () => {
        qty > 1 ?  setQty(qty - 1) : qty
    }

    const getData = () => {
        let id = props.route.params.id
        Axios.get(API_URL + 'products/' + id)
        .then((res)=>{
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const addToCartBtn = () => {
        let addToCart = {
            id_user : 1,      //id user dummy nanti ambil dari redux
            id_product : data[0].id,
            qty : qty
        }

        Axios.post(API_URL+'cart', addToCart)
        .then((res)=>{
            if(!res.data.error){
                Alert.alert('Add To Cart Success!')
            }
        })
        .catch((err)=>{
            console.log(err)
        })

        
    }


    const addToWishlistBtn = () => {
        let id_user = 1  //id user dummy nanti ambil dari redux
        let id_product = data[0].id
        
        Axios.get(API_URL+'wishlist/'+id_user)
        .then((res)=>{
            if(res.data.data.length === 0){
                Axios.post(API_URL+'wishlist', {id_user:id_user, id_product:id_product})
                .then((res)=>{
                    if(!res.data.error){
                        Alert.alert('Add To Wishlist Success!')
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
            }else{
                Alert.alert('This Product Is Already On The Wishlist')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
      



    return (
        <View style={styles.container}>
            <HeaderMain button={true} style={styles.header} type='icon-only' title={props.route.params.title} onPress={() => props.navigation.goBack()} />
            {
            data === null ?
            <Text>Loading ...</Text>
            :
            <ProductDetailContent
                image = {{uri:API_URL + data[0].url_image}}
                title = {data[0].title}
                author = {data[0].author}
                publisher = {data[0].publisher}
                halaman = {data[0].halaman}
                tahun = {data[0].tahun_terbit}
                bahasa = {data[0].bahasa}
                stock = {data[0].stock}
                deskripsi = {data[0].description}
                price = {data[0].price * qty}
                category = {data[0].category}
                qty = {qty}
                minQty = {()=>onMinQtyHandler()}
                plusQty = {()=>onPlusQtyHandler()}
                AddToCartBtn = {()=>{addToCartBtn()}}
                AddToWishlistBtn = {()=>{addToWishlistBtn()}}
            />
            }

        </View>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
