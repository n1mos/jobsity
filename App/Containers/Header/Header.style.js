import { StyleSheet } from 'react-native'
import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  subHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  backContainer: {
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: Colors.black,
    justifyContent: 'center',
  },
  favoriteContainer: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: Colors.black,
    justifyContent: 'center',
  },
  heart: {
    width: 36,
    height: 36
  },
  logoContainer: {
    flex: 1,
    height: 60,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.gray1,
    borderBottomWidth: 1,
    height: 50,
    backgroundColor: Colors.white
  },
  searchIconContainer: {
    paddingLeft: 30,
    paddingRight: 8,
  },
  searchInput: {
    flex: 1,
    ...Fonts.normal,
  },
  logo: {
    maxHeight: 40,
  },
})
