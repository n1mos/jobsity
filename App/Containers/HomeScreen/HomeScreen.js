import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import ShowsActions from 'App/Stores/Shows/Actions'
import Styles from './HomeScreen.style'
import ShowList from 'App/Components/ShowList/ShowList'

class HomeScreen extends React.Component {
  renderShowList() {
    const { showsErrorMessage, showsIsLoading, shows } = this.props

    if (showsErrorMessage) {
      return <Text style={Styles.error}>{showsErrorMessage}</Text>
    }
    
    if (!shows.length) {
      return <ActivityIndicator size="large" color="#000" />
    }

    return (
      <ShowList
        title="List of Shows"
        data={shows}
        onEndReached={() => this.fetchShows()}
        onRefresh={() => this.fetchShows(0)}
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
    const { page, total_pages } = this.props.shows

    if (page < total_pages) {
      const nextPage = selectPage || page + 1

      this.props.fetchShows(nextPage)
    }
  }
}

const mapStateToProps = (state) => ({
  shows: state.shows.shows,
  showsIsLoading: state.shows.showsIsLoading,
  showsErrorMessage: state.shows.showsErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchShows: (page) => dispatch(ShowsActions.fetchShows(page)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
