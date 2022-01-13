import { StyleSheet } from 'react-native'

import { Fonts, Colors, Dimensions } from 'App/Theme'

const { vw } = Dimensions

export default StyleSheet.create({
    container: {
        paddingBottom: 5,
        marginBottom: 15,
    },
    imageContainer: {
        height: vw(56),
        marginBottom: 15
    },
    image: {
        flex: 1,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    title: {
        ...Fonts.normal,
        color: Colors.black,
        fontWeight: '700',
    },
    name: {
        ...Fonts.normal,
        color: Colors.black,
        fontWeight: '500',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 20
    },
    star: {
        marginRight: 5
    },
    rating: {
        ...Fonts.normal,
        color: Colors.gray3,
        fontWeight: '700',
    },
    overviewContainer: {
        paddingTop: 15,
        paddingBottom: 30,
    },
    summaryTitle: {
        ...Fonts.h2,
        color: Colors.black,
        fontWeight: '700',
        marginBottom: 10
    },
    p: {
        ...Fonts.normal,
        color: Colors.gray3,
    }
})
