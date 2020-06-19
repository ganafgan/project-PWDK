import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { ILBook1, ILBook2, ILBook3, IconMinusButton, IconPlusButton } from '../../../assets'
import { Button, Gap } from '../../atoms'
import { colors, fonts } from '../../../utils'

const ContentCarts = () => {
    // Deklarasi variabel state baru "Count"
    const [count, setCount] = useState(0);
    
    function buttonClickHandlerMinus() {
        setCount(count - 1);
	}
    
    function buttonClickHandlerPlus() {
        setCount(count + 1);
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.page}>
                    <Image source={ILBook1} style={styles.img} />
                    <View style={styles.content}>
                        <Text style={styles.title}>Rahasia Wanita</Text>
                        <Gap height={5} />
                        <Text style={styles.author}>Giran Munggaran</Text>
                        <Gap height={20} />
                        <Text style={styles.price}>Rp 150.000</Text>
                    </View>
                    <View style={styles.content2}>
                        <IconMinusButton onPress={() => buttonClickHandlerMinus() } />
                        <Gap width={5} />
                        <Text>{ count }</Text>
                        <Gap width={5} />
                        <IconPlusButton onPress={() => buttonClickHandlerPlus() } />
                    </View>
                </View>
                <Gap height={20} />

                <View style={styles.page}>
                    <Image source={ILBook2} style={styles.img} />
                    <View style={styles.content}>
                        <Text style={styles.title}>Mencari One Piece</Text>
                        <Gap height={5} />
                        <Text style={styles.author}>Luffy</Text>
                        <Gap height={20} />
                        <Text style={styles.price}>Rp 100.000</Text>
                    </View>
                    <View style={styles.content2}>
                        <IconMinusButton onPress={() => buttonClickHandlerMinus()} />
                        <Gap width={5} />
                        <Text>{ count }</Text>
                        <Gap width={5} />
                        <IconPlusButton onPress={() => buttonClickHandlerPlus()} />
                    </View>
                </View>
                <Gap height={20} />

                <View style={styles.page}>
                    <Image source={ILBook3} style={styles.img} />
                    <View style={styles.content}>
                        <Text style={styles.title}>Menaklukan Ukhti</Text>
                        <Gap height={5} />
                        <Text style={styles.author}>Afgan Taufiq Hidayat</Text>
                        <Gap height={20} />
                        <Text style={styles.price}>Rp 125.000</Text>
                    </View>
                    <View style={styles.content2}>
                        <IconMinusButton onPress={() => buttonClickHandlerMinus()} />
                        <Gap width={5} />
                        <Text>{count}</Text>
                        <Gap width={5} />
                        <IconPlusButton onPress={() => buttonClickHandlerPlus()} />
                    </View>
                </View>
                <Gap height={20} />
            </ScrollView>  

            <View style={{flexDirection:'row', justifyContent:'space-between', height:60, backgroundColor: 'skyblue', marginLeft:-20, marginRight:-20, marginBottom:-20}}>
                <View style={{justifyContent:'center', alignItems:'center',paddingLeft:20}}><Text>Rp.529.000</Text></View>
                <View style={{justifyContent:'center', alignItems:'center', paddingRight:20}}><Button title="Checkout" /></View>
            </View>

                 
        </View>
        
    )
}

export default ContentCarts

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.white, 
        flex :1       
    },
    page: {
        padding: 20,
        backgroundColor: colors.border,
        flexDirection: 'row'
    },
    content: {
        marginLeft: 20,
        flex:1,        
    },
    content2: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 65,       
    },
    img: {
        height: 150,
        width: 100
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    author: {
        fontSize: 14,
        fontFamily: fonts.secondary[400],
        color: colors.text.secondary
    },
    price: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    btn: {
        height: 50,
        width: 50
    }
})
