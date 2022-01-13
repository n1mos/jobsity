import { takeLatest, all } from 'redux-saga/effects'
import { ShowsTypes } from 'App/Stores/Shows/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchEpisodes, fetchShows, searchShows } from './ShowsSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchShows()` when a `FETCH_SHOWS` action is triggered
    takeLatest(ShowsTypes.FETCH_SHOWS, fetchShows),
    takeLatest(ShowsTypes.SEARCH_SHOWS, searchShows),
    takeLatest(ShowsTypes.FETCH_EPISODES, fetchEpisodes),
  ])
}
