import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILLogo } from '../../assets'
import { Input, Link, Button, Gap } from '../../components'
import { colors } from '../../utils'

const Login = () => {
    return (
        <View style={styles.page}>
            <View>
                <Image source={ILLogo} style={styles.logo} />
            </View>
            <Text style={styles.title}>Login Book Store</Text>
            <Input label='Email Address'/>
            <Gap height={25} />
            <Input label='Password' />
            <Gap height={10} />
            <Link title='Forget Password' size={12} />
            <Gap height={50} />
            <Button title='Sign In' />
            <Gap height={30} />
            <Link title='Create New Account' size={16} align='center'/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
        backgroundColor: colors.white
    },
    logo: {
        height: 80,
        width: 80
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40
    }
})
