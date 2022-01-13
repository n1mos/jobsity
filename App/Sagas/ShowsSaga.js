import { put, call } from 'redux-saga/effects'
import ShowsActions from 'App/Stores/Shows/Actions'
import { showsService } from 'App/Services/ShowsService'

export function* fetchShows(action) {
  yield put(ShowsActions.fetchShowsLoading())

  if (action.page) {
    yield put(ShowsActions.setPage(action.page))
  }

  const shows = yield call(showsService.fetchShows, action)

  if (shows) {
    yield put(ShowsActions.fetchShowsSuccess(shows))
  } else {
    yield put(ShowsActions.fetchShowsFailure('There was an error. Please try again later.'))
  }
}

export function* searchShows(action) {
  yield put(ShowsActions.searchShowsLoading())

  const shows = yield call(showsService.searchShows, action)

  if (shows) {
    yield put(ShowsActions.searchShowsSuccess(shows))
  } else {
    yield put(ShowsActions.searchShowsFailure('There was an error. Please try again later.'))
  }
}

export function* fetchEpisodes(action) {
  yield put(ShowsActions.fetchEpisodesLoading())

  const episodes = yield call(showsService.fetchEpisodes, action)

  if (episodes) {
    yield put(ShowsActions.fetchEpisodesSuccess(episodes))
  } else {
    yield put(ShowsActions.fetchEpisodesFailure('There was an error. Please try again later.'))
  }
}
