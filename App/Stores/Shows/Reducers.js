import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ShowsTypes } from './Actions'

export const fetchShowsLoading = (state) => ({
  ...state,
  showsIsLoading: true,
  showsErrorMessage: null,
})

export const fetchShowsSuccess = (state, { shows }) => {
  return {
    ...state,
    shows,
    showsIsLoading: false,
    showsErrorMessage: null,
  }
}

export const fetchShowsFailure = (state, { errorMessage }) => ({
  ...state,
  shows: [],
  showsIsLoading: false,
  showsErrorMessage: errorMessage,
})

export const toggleFavorite = (state, { showId }) => {
  const newFavorites = [...state.favorites]

  if (newFavorites.indexOf(showId) === -1) {
    newFavorites.push(showId)
  } else {
    const index = newFavorites.indexOf(showId);
    if (index > -1) {
      newFavorites.splice(index, 1);
    }
  }

  return {
    ...state,
    favorites: newFavorites,
  }
}

export const setPage = (state, { page }) => {
  return {
    ...state,
    page
  }
}

export const searchShowsLoading = (state) => ({
  ...state,
  showsIsLoading: true,
  showsErrorMessage: null,
})

export const searchShowsSuccess = (state, { shows }) => {
  return {
    ...state,
    shows,
    showsIsLoading: false,
    showsErrorMessage: null,
  }
}

export const searchShowsFailure = (state, { errorMessage }) => ({
  ...state,
  shows: [],
  showsIsLoading: false,
  showsErrorMessage: errorMessage,
})

export const fetchEpisodesLoading = (state) => ({
  ...state,
  episodesIsLoading: true,
  episodesErrorMessage: null,
})

export const fetchEpisodesSuccess = (state, { episodes }) => {
  return {
    ...state,
    episodes,
    episodesIsLoading: false,
    episodesErrorMessage: null,
  }
}

export const fetchEpisodesFailure = (state, { errorMessage }) => ({
  ...state,
  episodes: [],
  episodesIsLoading: false,
  episodesErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ShowsTypes.FETCH_SHOWS_LOADING]: fetchShowsLoading,
  [ShowsTypes.FETCH_SHOWS_SUCCESS]: fetchShowsSuccess,
  [ShowsTypes.FETCH_SHOWS_FAILURE]: fetchShowsFailure,
  [ShowsTypes.SEARCH_SHOWS_LOADING]: searchShowsLoading,
  [ShowsTypes.SEARCH_SHOWS_SUCCESS]: searchShowsSuccess,
  [ShowsTypes.SEARCH_SHOWS_FAILURE]: searchShowsFailure,
  [ShowsTypes.FETCH_EPISODES_LOADING]: fetchEpisodesLoading,
  [ShowsTypes.FETCH_EPISODES_SUCCESS]: fetchEpisodesSuccess,
  [ShowsTypes.FETCH_EPISODES_FAILURE]: fetchEpisodesFailure,
  [ShowsTypes.TOGGLE_FAVORITE]: toggleFavorite,
  [ShowsTypes.SET_PAGE]: setPage,
})
