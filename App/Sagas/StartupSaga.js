import { put } from 'redux-saga/effects'

import ShowsActions from 'App/Stores/Shows/Actions'
import NavigationService from 'App/Services/NavigationService'

export function* startup() {
  yield put(ShowsActions.fetchShows())

  NavigationService.navigateAndReset('MainScreen')
}
