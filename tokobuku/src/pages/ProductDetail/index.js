import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils';

const ProductDetail = () => {
    return (
        <View style={styles.container}>
            <Text>Product Detail Page</Text>
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
