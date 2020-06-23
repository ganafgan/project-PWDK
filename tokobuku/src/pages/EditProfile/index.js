import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderMain, Input, Gap, Button, Profile } from '../../components'
import { colors } from '../../utils'
import Axios from 'axios'
import { API_URL } from '../../supports/constants/urlApi'
import ImagePicker from 'react-native-image-picker';

const EditProfile = (props) => {

    useEffect(()=>{
        getDataUser()
    },[])

    const [profile, setProfile] = useState(null)
    console.log(profile)
   
    
    const getDataUser = () => {
        const id = 1
        Axios.get(API_URL + 'user/' + id)
        .then((res)=>{
            // console.log(res)
            setProfile(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onUploadClick = () => {
        ImagePicker.showImagePicker({title : "Select Your Image"},(response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri , type : response.type, name : response.fileName};
                console.log(source)
                setImage(source)
              }
        })
    }

    if(profile === null){
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
                <HeaderMain type='icon-only' title='Edit Profile' button={true} onPress={()=> props.navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile name='Natalie' onPress={onUploadClick} />
                    <Gap height={20} />
                    <Input label='FullName' value={profile[0].fullname}/>
                    <Gap height={10} />
                    <Input label='Email' value={profile[0].email} disable/>
                    <Gap height={10} />
                    <Input label='Phone Number' value={profile[0].phone_number} />
                    <Gap height={10} />
                    <Input label='Address' value={profile[0].address} />
                    <Gap height={10} />
                    <Input label='Kelurahan' value={profile[0].kelurahan} />
                    <Gap height={10} />
                    <Input label='Kecamatan' value={profile[0].kecamatan} />
                    <Gap height={10} />
                    <Input label='Kota' value={profile[0].kota}/>
                    <Gap height={10} />
                    <Input label='Provinsi' value={profile[0].provinsi} />  
                    <Gap height={30} />
                    <Button title='Save' />        
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
