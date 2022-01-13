import React, { Component } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'

import ShowsActions from 'App/Stores/Shows/Actions'
import { Images } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import Touchable from 'App/Components/Touchable/Touchable'
import Styles from './Header.style'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { text: '' }
  }

  renderBackButton() {
    const { length } = this.props.options.navigation.state.routes
    const showBackButton = length > 1

    if (!showBackButton) {
      return <View />
    }

    return (
      <Touchable onPress={() => NavigationService.navigateBack()}>
        <View style={Styles.backContainer}>
          <Image style={Styles.back} source={Images.back} resizeMode={'contain'} />
        </View>
      </Touchable>
    )
  }

  renderFavorite() {
    return (
      <Touchable onPress={() => NavigationService.navigate('FavoritesScreen')}>
        <View style={Styles.favoriteContainer}>
          <Image style={Styles.heart} source={Images.heart} resizeMode={'contain'} />
        </View>
      </Touchable>
    )
  }

  search = (query) => {
    this.setState({ text: query })
    
    if (NavigationService.getCurrentRoute().length > 0) {
      NavigationService.navigateAndReset('MainScreen')

      setTimeout(() => {
        this.textInput.focus()
      }, 1)
    }

    if (query !== '') {
      this.props.searchShows(query)
    } else {
      this.props.fetchShows(0)
    }
  }

  render() {
    const routes = this.props.options.navigation.state.routes
    const hideSearch = routes[routes.length - 1].routeName === 'FavoritesScreen'

    return (
      <View style={Styles.headerContainer}>
        <View style={Styles.subHeaderContainer}>
          {this.renderBackButton()}

          {this.renderFavorite()}

          <View style={Styles.logoContainer}>
            <Image style={Styles.logo} source={Images.logo} resizeMode={'contain'} />
          </View>
        </View>

        {!hideSearch &&
          <View style={Styles.searchContainer}>
            <View style={Styles.searchIconContainer} pointerEvents="none">
              <Image style={Styles.searchIcon} source={Images.search} resizeMode={'contain'} />
            </View>

            <TextInput
              ref={(input) => { this.textInput = input; }}
              style={Styles.searchInput}
              placeholder="Search"
              onChangeText={this.search}
              underlineColorAndroid="transparent"
              value={this.state.text}
            />
          </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  shows: state.shows.shows,
  showsIsLoading: state.shows.showsIsLoading,
  showsErrorMessage: state.shows.showsErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  searchShows: (query) => dispatch(ShowsActions.searchShows(query)),
  fetchShows: (page) => dispatch(ShowsActions.fetchShows(page)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
