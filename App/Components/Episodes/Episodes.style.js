import { StyleSheet } from 'react-native'

import { Fonts, Colors, Dimensions } from 'App/Theme'

export default StyleSheet.create({
    container: {
        paddingBottom: 5,
        marginBottom: 15,
    },
    episodeContainer: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    seasonContainer: {
        marginBottom: 20,
    },
    seasonTitle: {
        ...Fonts.h2,
        color: Colors.black,
        fontWeight: '700',
        marginBottom: 5
    },
    column: {
        flex: 1,
    },
    title: {
        ...Fonts.normal,
        color: Colors.black,
    },
    content: {
        ...Fonts.normal,
        color: Colors.gray3,
    },
})
