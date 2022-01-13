import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ShowsReducer } from './Shows/Reducers'

export default () => {
  const rootReducer = combineReducers({
    shows: ShowsReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
