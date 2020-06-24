import React from 'react'
import { StyleSheet, Alert, View } from 'react-native'
import { colors } from '../../utils';
import { Profile, HeaderMain, ListMenuProfile, Gap } from '../../components';
import { connect } from 'react-redux'
import { clearUserData } from './../../redux/actions/userAction'
import AsyncStorage from '@react-native-community/async-storage'

const Account = (props) => {

    const logOutPressBtn = () => {
        Alert.alert('Logout', 'Are You Sure Want to Logout?',
            [
                {
                    text : 'Cancel'
                },
                {
                    text : 'Yes',
                    onPress:onLogoutHandler
                }
            ]
        )
    }

    const onLogoutHandler = () => {
        AsyncStorage.removeItem('data_user', (err) => {
            if(err) console.log(err)
            props.clearUserData()
            props.navigation.navigate('GetStarted')
        })
    }

    return (
        <View style={styles.container}>
            <HeaderMain title='Account' />
            <Gap height={30} />
            <View>
                <Profile name='Natalie' />
                <Gap height={50} />
                <ListMenuProfile name='Edit' desc='Edit Profile' type='next' icon='edit' onPress={()=>props.navigation.navigate('EditProfile')} />
                <ListMenuProfile name='About' desc='Tentang Aplikasi' type='next' icon='about'  onPress={()=> props.navigation.navigate('About')} />
                <ListMenuProfile name='Help' desc='Bantuan Aplikasi' type='next' icon='help'  onPress={()=> props.navigation.navigate('Help')} />
                <ListMenuProfile name='Logout' desc='Keluar dari Aplikasi' type='next' icon='logout' onPress={logOutPressBtn} />
            </View>
        </View>
    )
}

export default connect(null,{clearUserData})(Account);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
