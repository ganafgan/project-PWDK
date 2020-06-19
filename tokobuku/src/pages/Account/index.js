import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils';
import { HeaderMain } from '../../components';

const Account = () => {
    return (
        <View style={styles.container}>
            <HeaderMain title='Account' />
            <Text>Account Page</Text>
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
