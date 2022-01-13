import axios from 'axios'
import { Config } from 'App/Config'

const showsApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

async function fetchShows(action) {
  const page = action.page || 0
  const url = `shows?page=${page}`

  const response = await showsApiClient.get(url)
  
  if (response.status == 200) {
    return response.data
  }

  return null
}

async function searchShows(action) {
  const query = action.query || ''
  const url = `search/shows?q=${query}`
  
  const response = await showsApiClient.get(url)

  if (response.status == 200) {
    return response.data.map((show) => show.show)
  }

  return null
}

async function fetchEpisodes({ showId }) {
  const url = `shows/${showId}/episodes`
  
  const response = await showsApiClient.get(url)

  if (response.status == 200) {
    return response.data
  }

  return null
}

export const showsService = {
  fetchShows,
  fetchEpisodes,
  searchShows
}
