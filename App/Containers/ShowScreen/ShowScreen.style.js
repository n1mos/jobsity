import { StyleSheet } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  overviewContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  episodesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    ...Fonts.h3,
    color: Colors.black,
    fontWeight: '700',
    marginBottom: 20,
  },
  p: {
    ...Fonts.normal,
    color: Colors.gray3,
  }
})
