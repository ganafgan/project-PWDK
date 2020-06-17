import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard Page</Text>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
