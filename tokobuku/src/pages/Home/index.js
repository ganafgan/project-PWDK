import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderSearch, BookCategory, RatedBook, Gap } from '../../components'
import { fonts, colors } from '../../utils'

const Home = () => {
    return (
        <View style={styles.container}>
            <HeaderSearch />
            <View style={styles.content}>
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
                <Text style={styles.ratedTitle}>Buku Pilihan</Text>
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
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        paddingHorizontal: 20,
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
        flexDirection: 'row'
    },
    wrapperScroll: {
        marginHorizontal: -20
    },
    ratedTitle: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 20,
        marginBottom: 20
    },
    rated: {
        flexDirection: 'row'
    },
    ratedWrapper: {

    }
})
