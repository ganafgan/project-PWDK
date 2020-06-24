import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import { HeaderMain, Input, Gap, Button, Loading } from '../../components'
import { colors } from '../../utils'
import Axios from 'axios'
import { API_URL } from '../../supports/constants/urlApi'

const EditProfile = (props) => {

    useEffect(()=>{
        getDataUser()
    },[])

    const [profile, setProfile] = useState(null)
    const [fullname, setFullname] = useState(null)
    const [phone_number, setPhone_number] = useState(null)
    const [address, setAddress] = useState(null)
    const [kelurahan, setKelurahan] = useState(null)
    const [kecamatan, setKecamatan] = useState(null)
    const [kota, setKota] = useState(null)
    const [provinsi, setProvinsi] = useState(null)

   
    const getDataUser = () => {
        const id = props.route.params.id_user
        Axios.get(API_URL + 'user/' + id)
        .then((res)=>{
            setProfile(res.data.data)
            setFullname(res.data.data[0].fullname)
            setPhone_number(res.data.data[0].phone_number)
            setAddress(res.data.data[0].address)
            setKelurahan(res.data.data[0].kelurahan)
            setKecamatan(res.data.data[0].kecamatan)
            setKota(res.data.data[0].kota)
            setProvinsi(res.data.data[0].provinsi)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    const saveUserDetail = () => {
        let data = {
            fullname : fullname,
            phone_number : phone_number,
            address : address,
            kelurahan : kelurahan,
            kecamatan : kecamatan,
            kota : kota,
            provinsi : provinsi,
            users_id : props.route.params.id_user
        }
        if(fullname && phone_number && address && kelurahan && kecamatan && kota && provinsi){
            Axios.post(API_URL+'user', data)
            .then((res)=>{
                if(!res.data.error){
                    Alert.alert(res.data.message)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            Alert.alert('All Form Must Filled')
        }
    }


    if(profile === null){
        return (
            <Loading/>
        )
    }
    return (
        <View style={styles.container}>
                <HeaderMain type='icon-only' title='Edit Profile' button={true} onPress={()=> props.navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Input label='FullName' value={fullname} onChangeText={(text)=>setFullname(text)} />
                    <Gap height={10} />
                    <Input label='Email' value={profile[0].email} disable/>
                    <Gap height={10} />
                    <Input label='Phone Number' value={phone_number} onChangeText={(text)=>setPhone_number(text)} />
                    <Gap height={10} />
                    <Input label='Address' value={address} onChangeText={(text)=>setAddress(text)} />
                    <Gap height={10} />
                    <Input label='Kelurahan' value={kelurahan} onChangeText={(text)=>setKelurahan(text)} />
                    <Gap height={10} />
                    <Input label='Kecamatan' value={kecamatan} onChangeText={(text)=>setKecamatan(text)} />
                    <Gap height={10} />
                    <Input label='Kota' value={kota} onChangeText={(text)=>setKota(text)}/>
                    <Gap height={10} />
                    <Input label='Provinsi' value={provinsi} onChangeText={(text)=>setProvinsi(text)} />  
                    <Gap height={30} />
                    <Button title='Save' onPress={saveUserDetail} />        
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        padding: 40
    }
})
