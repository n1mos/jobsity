import React from 'react'
import moment from 'moment'

import { View, Text, FlatList, ActivityIndicator } from 'react-native'

import Touchable from 'App/Components/Touchable/Touchable'
import NavigationService from 'App/Services/NavigationService'
import Styles from './Episodes.style'

export default Episodes = ({ data, loading }) => {
    if (loading) {
        return <ActivityIndicator size="large" color="#000" />
    }

    const episodes = []

    data.forEach((episode) => {
        if (episodes[episode.season - 1] !== undefined) {
            episodes[episode.season - 1].push(episode)
        } else {
            episodes[episode.season - 1] = [episode]
        }
    })

    const onEpisodePress = (episode) => {
        NavigationService.navigate('EpisodeScreen', { data: episode })
    }

    const renderSeason = ({ item, index }) => (
        <View style={Styles.seasonContainer}>
            <Text style={Styles.seasonTitle}>Season {index + 1}</Text>

            <View style={Styles.episodeContainer}>
                <View style={[Styles.column, { flex: 2 }]}>
                    <Text style={Styles.title}>Episode</Text>
                </View>

                <View style={[Styles.column, { alignItems: 'flex-end' }]}>
                    <Text style={Styles.title}>Airdate</Text>
                </View>
            </View>

            {item.map((episode) => {
                const airdate = moment(episode.airdate).format('MMM D, YYYY')

                return (
                    <Touchable onPress={() => onEpisodePress(episode)}>
                        <View style={Styles.episodeContainer}>
                            <View style={[Styles.column, { flex: 2 }]}>
                                <Text style={Styles.content}>{episode.season}x{episode.number}: {episode.name}</Text>
                            </View>
                
                            <View style={[Styles.column, { alignItems: 'flex-end' }]}>
                                <Text style={Styles.content}>{airdate}</Text>
                            </View>
                        </View>
                    </Touchable>
                )
            })}
        </View>
    );

    return (
        <View styles={Styles.container}>
            <FlatList
                data={episodes}
                renderItem={renderSeason}
                keyExtractor={item => item.id}
            />
        </View>
    )
}