import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchShows: ['page'],
  fetchShowsLoading: null,
  fetchShowsSuccess: ['shows'],
  fetchShowsFailure: ['errorMessage'],
  fetchEpisodes: ['showId'],
  fetchEpisodesLoading: null,
  fetchEpisodesSuccess: ['episodes'],
  fetchEpisodesFailure: ['errorMessage'],
  searchShows: ['query'],
  searchShowsLoading: null,
  searchShowsSuccess: ['shows'],
  searchShowsFailure: ['errorMessage'],
  toggleFavorite: ['showId'],
  setPage: ['page'],
})

export const ShowsTypes = Types
export default Creators
