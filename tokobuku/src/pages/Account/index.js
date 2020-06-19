import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils';
import { Profile, HeaderMain, ListMenuProfile, Gap } from '../../components';


const Account = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderMain title='Account' />
            <Gap height={30} />
            <View>
                <Profile />
                <Gap height={50} />
                <ListMenuProfile name='Edit' desc='Edit Profile' type='next' icon='edit' />
                <ListMenuProfile name='About' desc='Tentang Aplikasi' type='next' icon='about' />
                <ListMenuProfile name='Help' desc='Bantuan Aplikasi' type='next' icon='help' />
                <ListMenuProfile name='Logout' desc='Keluar dari Aplikasi' type='next' icon='logout' />
            </View>
        </View>
    )
}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
