import { StyleSheet } from 'react-native'

import { Fonts, Colors, Dimensions } from 'App/Theme'

const { vw } = Dimensions

export default StyleSheet.create({
  container: {
    paddingBottom: 5,
    marginBottom: 15,
  },
  title: {
    ...Fonts.normal,
    color: Colors.black,
    fontWeight: '700',
  },
  imageContainer: {
    height: vw(60),
  },
  pageImageContainer: {
    height: vw(100),
  },
  image: {
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderLeftColor: Colors.gray4,
    borderRightColor: Colors.gray4,
    borderBottomColor: Colors.gray4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  premiered: {
    flex: 1,
    ...Fonts.normal,
    color: Colors.gray3,
  },
  genre: {
    flex: 1,
    textAlign: 'right',
    ...Fonts.normal,
    color: Colors.gray3,
  },
  schedule: {
    ...Fonts.normal,
    color: Colors.gray3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    marginRight: 5
  },
  rating: {
    ...Fonts.normal,
    color: Colors.gray3,
    fontWeight: '700',
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  heart: {
    height: 18,
    width: 18,
    marginRight: 5
  },
  favorite: {
    ...Fonts.normal,
    color: Colors.gray3,
  }
})
