import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import ShowsActions from 'App/Stores/Shows/Actions'
import Styles from './FavoritesScreen.style'
import ShowList from 'App/Components/ShowList/ShowList'

class HomeScreen extends React.Component {
  renderShowList() {
    const { showsErrorMessage, showsIsLoading, shows, favorites } = this.props

    if (showsErrorMessage) {
      return <Text style={Styles.error}>{showsErrorMessage}</Text>
    }
    
    if (!shows.length) {
      return <ActivityIndicator size="large" color="#000" />
    }

    if (!favorites.length) {
      return <Text style={Styles.error}>You don't have any favorites</Text>
    }

    return (
      <ShowList
        title="Favorites"
        data={shows.filter((show) => favorites.includes(show.id))}
        refreshing={showsIsLoading}
        ListFooterComponent={showsIsLoading && <ActivityIndicator size="large" color="#000" />}
      />
    )
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.renderShowList()}
      </View>
    )
  }

  fetchShows(selectPage = null) {
    const { page } = this.props

    const nextPage = selectPage === 0 ? selectPage : page + 1

    console.log(selectPage);

    this.props.fetchShows(nextPage)
  }
}

const mapStateToProps = (state) => ({
  shows: state.shows.shows,
  showsIsLoading: state.shows.showsIsLoading,
  showsErrorMessage: state.shows.showsErrorMessage,
  page: state.shows.page,
  favorites: state.shows.favorites,
})

const mapDispatchToProps = (dispatch) => ({
  fetchShows: (page) => dispatch(ShowsActions.fetchShows(page)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
