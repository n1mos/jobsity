import React from 'react'
import { View, Image, Text } from 'react-native'
import moment from 'moment'

import { Config } from 'App/Config'
import { Images } from 'App/Theme'
import Touchable from 'App/Components/Touchable/Touchable'
import NavigationService from 'App/Services/NavigationService'
import Styles from './Show.style'

const Show = ({ data, page, toggleFavorite, favorites }) => {
  const imageSource = {
    uri: data.image?.original || Config.PLACEHOLDER_URL,
  }
  const premiered = moment(data.premiered).format('MMMM D, YYYY')

  const renderGenres = () => {
    const { genres } = data
    const pageGenreStyle = { textAlign: 'left' }

    if (!page) {
      return <Text style={Styles.genre}>{genres[0]}</Text>
    } else {
      return <Text style={[Styles.genre, pageGenreStyle]}>{genres.join(' / ')}</Text>
    }
  }

  const renderSchedule = () => {
    if (!page) return

    const { schedule, runtime } = data

    const days = schedule.days.map((day) => `${day}s`)

    return (
      <Text style={Styles.schedule}>{days.join(' and ')} at {schedule.time} ({runtime}min) </Text>
    )
  }

  const renderFavorite = () => {
    if (!page) return

    const isFavorite = favorites.includes(data.id)

    return (
      <Touchable onPress={() => toggleFavorite(data.id)}>
        <View style={Styles.favoriteContainer}>
          <Image style={Styles.heart} source={isFavorite ? Images.heart : Images.heart_outline} resizeMode={'contain'} />
          
          <Text style={Styles.favorite}>

            {!isFavorite ? 'Add to favorites' : 'Remove from favorites'}
          </Text>
        </View>
      </Touchable>
    )
  }

  const renderContainer = () => {
    const pageInfoContainer = page && { flexDirection: 'column' }

    return (
      <View style={Styles.container}>
        <View style={page ? Styles.pageImageContainer : Styles.imageContainer}>
          <Image style={Styles.image} source={imageSource} resizeMode={page ? 'contain' : 'cover'} />
        </View>

        <View style={Styles.bottomContainer}>
          <Text style={Styles.title}>
            {data.name}
          </Text>

          <View style={Styles.ratingContainer}>
            <Image style={Styles.star} source={Images.star} resizeMode={'contain'} />
            
            <Text style={Styles.rating}>
              {data.rating?.average}
            </Text>
          </View>

          <View style={[Styles.infoContainer, pageInfoContainer]}>
            <Text style={Styles.premiered}>{premiered}</Text>

            {renderGenres()}

            {renderSchedule()}

            {renderFavorite()}
          </View>
        </View>
      </View>
    )
  }

  const onPress = () => {
    NavigationService.navigate('ShowScreen', { data })
  }

  if (page) {
    return renderContainer()
  } else {
    return <Touchable onPress={onPress}>{renderContainer()}</Touchable>
  }
}

export default Show
