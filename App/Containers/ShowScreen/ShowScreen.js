import React from 'react'

import { ScrollView, Text, View } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux'

import ShowsActions from 'App/Stores/Shows/Actions'
import Show from 'App/Components/Show/Show'
import Episodes from 'App/Components/Episodes/Episodes'
import Styles from './ShowScreen.style'

class ShowScreen extends React.Component {
  componentDidMount() {
    const {
      navigation: {
        state: {
          params: { data },
        },
      },
    } = this.props
    
    this.props.fetchEpisodes(data.id)
  }

  render() {
    const {
      navigation: { state: { params: { data }, }, },
      episodes,
      episodesIsLoading,
      toggleFavorite,
      favorites
    } = this.props
    
    return (
      <ScrollView style={Styles.scrollView}>
        <Show page={true} data={data} toggleFavorite={toggleFavorite} favorites={favorites} />

        <View style={Styles.overviewContainer}>
          <Text style={Styles.title}>Summary</Text>

          <HTMLView
            value={data.summary}
            stylesheet={Styles}
          />
        </View>

        <View style={Styles.episodesContainer}>
          <Text style={Styles.title}>Episodes</Text>

          <Episodes data={episodes} loading={episodesIsLoading} />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  episodes: state.shows.episodes,
  episodesIsLoading: state.shows.episodesIsLoading,
  episodesErrorMessage: state.shows.episodesErrorMessage,
  favorites: state.shows.favorites
})

const mapDispatchToProps = (dispatch) => ({
  fetchEpisodes: (showId) => dispatch(ShowsActions.fetchEpisodes(showId)),
  toggleFavorite: (showId) => dispatch(ShowsActions.toggleFavorite(showId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowScreen)
