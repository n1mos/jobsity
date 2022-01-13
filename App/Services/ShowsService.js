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

function fetchShows(action) {
  const page = action.page || 0
  const url = `shows?page=${page}`
  
  return showsApiClient.get(url).then((response) => {
    if (response.status == 200) {
      return response.data
    }

    return null
  })
}

function searchShows(action) {
  const query = action.query || ''
  const url = `search/shows?q=${query}`
  
  return showsApiClient.get(url).then((response) => {
    if (response.status == 200) {
      console.log(response.data)
      return response.data.map((show) => show.show)
    }

    return null
  })
}

function fetchEpisodes({ showId }) {
  const url = `shows/${showId}/episodes`
  
  return showsApiClient.get(url).then((response) => {
    if (response.status == 200) {
      console.log(response.data)
      return response.data
    }

    return null
  })
}

export const showsService = {
  fetchShows,
  fetchEpisodes,
  searchShows
}
