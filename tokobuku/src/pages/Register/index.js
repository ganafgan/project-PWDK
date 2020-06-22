import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors } from '../../utils'

const Register = ({navigation}) => {

    const [fullName, setFullName] = useState('')
    return (
        <View style={styles.page}>
            <Header onPress={()=> navigation.goBack()} title='Daftar Akun'/>
            <View style={styles.content}>
                <Input label='Full Name' onChangeText={(value) => setFullName(value)} value={fullName} />
                <Gap height={24} />
                <Input label='Email' />
                <Gap height={24} />
                <Input label='Password' />
                <Gap height={24} />
                <Input label='Confirm Password' />
                <Gap height={40} />
                <Button title='Continue' onPress={() => navigation.navigate('UploadPhoto')}/>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40, 
        paddingTop: 0
    }
})
