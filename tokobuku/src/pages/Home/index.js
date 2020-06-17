import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderSearch, BookCategory, RatedBook, Gap, Penerbit } from '../../components'
import { fonts, colors } from '../../utils'

const Home = () => {
    return (
        <View style={styles.page}>
            <HeaderSearch title='Cari Buku Favorit' width={300} />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.welcome}>Temukan Buku Favoritmu di BookStore</Text>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={20} />
                                <BookCategory />
                                <BookCategory />
                                <BookCategory />
                                <BookCategory />
                                <BookCategory />
                                <BookCategory />
                                <Gap width={10} />
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styles.title}>Buku Pilihan</Text>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.rated}>
                                <Gap width={20} />
                                <RatedBook />
                                <RatedBook />
                                <RatedBook />
                                <RatedBook />
                                <RatedBook />
                                <Gap width={10} />
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styles.title}>Buku Baru</Text>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.rated}>
                                <Gap width={20} />
                                <RatedBook />
                                <RatedBook />
                                <RatedBook />
                                <RatedBook />
                                <RatedBook />
                                <Gap width={10} />
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styles.title}>Penerbit</Text>
                        <Penerbit />
        
                </ScrollView>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 20,
        flex: 1,

    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        maxWidth: 250,
        marginTop: 20,
        marginBottom: 20
    },
    category: {
        flexDirection: 'row',
        marginBottom: 20
    },
    wrapperScroll: {
        marginHorizontal: -20,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        // marginTop: 20,
        // marginBottom: 20
    },
    rated: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    ratedWrapper: {

    },
})
